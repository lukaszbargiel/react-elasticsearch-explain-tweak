
import { ExplainScoreComponent, Parser } from "../Parser";
import { RegExpParser } from "../RegExpParser";
import { ChildrenCalculation, ScoreComponent, ScoreComponentType } from "../../ScoreComponent";

export class SynonymWeightSimilarityComponent extends ScoreComponent {

    constructor(init: Partial<SynonymWeightSimilarityComponent>) {
        super(init);
        Object.assign(this, { 
            fieldName: init.fieldName, 
            fieldQuery: init.fieldQuery,
            synonymName: init.synonymName,
            synonymQuery: init.synonymQuery });
    }

    fieldName: string;
    synonymName: string;
    fieldQuery: string;
    synonymQuery: string;
}

export class SynonymWeightSimilarityParser extends RegExpParser {

    constructor() {
        //weight(Synonym(itemname.text:coat itemname.text:jacket) in 553)
        super(/weight\(Synonym\((\S*):([a-zA-Z+ěščřžýáíé\s]*)\s(\S*):([a-zA-Z+ěščřžýáíé\s]*)\)?\sin.*\).*/, 4)
    }

    protected mapToScoreComponent = (explainScoreComponent: ExplainScoreComponent, matchedGroups: string[]): SynonymWeightSimilarityComponent => {

        return new SynonymWeightSimilarityComponent({
            modifiedResult: null,
            label: matchedGroups[1] + ':' + matchedGroups[2],
            childrenCalculation: ChildrenCalculation.SumOf,
            children: [],
            type: ScoreComponentType.FieldWeightSimilarity,
            result: explainScoreComponent.value,
            fieldName: matchedGroups[1],
            fieldQuery: matchedGroups[2],
            synonymName: matchedGroups[3],
            synonymQuery: matchedGroups[4],
            addToSubDataSet: true
        });
    };



}