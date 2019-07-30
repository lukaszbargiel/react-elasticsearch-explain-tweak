
import { ExplainScoreComponent, Parser } from "../Parser";
import { ChildrenCalculation, ScoreComponent, ScoreComponentType } from "../../ScoreComponent";
import { RegExpParser } from "../RegExpParser";

export class FieldScoreComponent extends ScoreComponent {

    constructor(init: Partial<FieldScoreComponent>) {
        super(init);
        Object.assign(this, { frequency: init.frequency, docFrequency: init.docFrequency, termFrequency: init.termFrequency });
    }

    // score related fields:
    frequency: number;
    docFrequency: number;
    termFrequency: number;
}

export class ScoreParser extends RegExpParser {

    constructor() {
        // score(doc=533,freq=1.0 = termFreq=1.0\n), product of:
        super(/score\(doc=(\d*)\,?freq=(\d+\.\d{1,2})[\s=]*termFreq=(\d+\.\d{1,2}).*/, 3)
    }

    protected mapToScoreComponent = (explainScoreComponent: ExplainScoreComponent, matchedGroups: string[]): FieldScoreComponent => {

        return new FieldScoreComponent({
            modifiedResult: null,
            label: matchedGroups[1] + ':' + matchedGroups[2],
            childrenCalculation: ChildrenCalculation.Product,
            children: [],
            type: ScoreComponentType.Score,
            result: explainScoreComponent.value,
            docFrequency: +matchedGroups[1],
            frequency: +matchedGroups[2],
            termFrequency: +matchedGroups[3],
            addToSubDataSet: true
        });
    };

}