
import { ExplainScoreComponent, Parser } from "../Parser";
import { ChildrenCalculation, ScoreComponent, ScoreComponentType } from "../../ScoreComponent";

export class OtherFilterParser extends Parser {

    canParse = (componentDescription: string) => {
        return true; //componentDescription.toLocaleLowerCase().indexOf("boost") >= 0
    };

    parseWithoutChildren = (explainScoreComponent: ExplainScoreComponent): ScoreComponent => {
        return new ScoreComponent({
            childrenCalculation: ChildrenCalculation.None,
            label: "Custom",
            type: ScoreComponentType.Other,
            children: [],
            result: explainScoreComponent.value,
            modifiedResult: null,
        });
    }

}