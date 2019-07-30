import * as React from "react";
import { SankeyDiagram } from "./SankeyDiagram";
import {
    default as transformForSankey,
    getPointsForRegression, interpolate, exponentialRegression
} from "../models/transformers/TransformForSankey";
import { DelegatingParser } from "../models/parsers/DelegatingParser";
import { getAllParsers } from "../models/parsers/AllParsers";
import singleHitSample from "../samples/SingleHitSample";
import InterpolationCurve from "./InterpolationCurve";
import { mergeScoreComponents } from "../models/MergeScoreModels";
import Point from "../types/Point";
import { ParsingContext } from "../models/parsers/ParsingContext";
import { SelectableStackedChart } from "./SelectableStackedChart";
import { ScoreComponentType, ScoreComponent, FormulaScoreComponent } from "../models/ScoreComponent";
import { FieldWeightSimilarityComponent } from "../models/parsers/specific/FieldWeightSimilarityParser";

const regressionResult = exponentialRegression();


const parsingContext = new ParsingContext();
const parsedComponent = DelegatingParser.fromAllParsers().parse(singleHitSample, getAllParsers(), parsingContext);
console.log(parsedComponent);
// return {
//     parsedComponent,
//     subDataSets: parsingContext.subDataSets
// }



export class App extends React.Component<{}, {}> {
    render() {
        const mergedSankeyGraphData = transformForSankey(parsedComponent);
        interpolate(mergedSankeyGraphData, regressionResult.inverseFn);

        const weights: FieldWeightSimilarityComponent[] = parsedComponent.getAllChildrenByType(ScoreComponentType.FieldWeightSimilarity) as FieldWeightSimilarityComponent[];
        debugger;
        return (
            <div>
                Whats going on here
                {
                    weights.map((field, index) => {
                        const fieldScore: ScoreComponent = field.getChildByType(ScoreComponentType.Score);
                        const idfScore: FormulaScoreComponent = fieldScore.getChildByType(ScoreComponentType.Idf) as FormulaScoreComponent;
                        const documentCount: ScoreComponent = idfScore.getChildByType(ScoreComponentType.DocumentCount)
                        const documentFrequency: ScoreComponent = idfScore.getChildByType(ScoreComponentType.DocumentFrequency)
                        return (
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <b>Keyword:</b> {field.fieldQuery}
                                    </div>
                                    <div className="col-sm-4">
                                        <b>Field Name:</b>{field.fieldName}
                                    </div>
                                    <div className="col-sm-4">
                                        <b>Total Score:</b>{fieldScore.result}
                                    </div><br />
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <b>Field Weight:</b> {idfScore.result}
                                    </div>
                                    <div className="col-sm-4">
                                        <b>Term Frequency:</b>{field.fieldName}
                                    </div>
                                    <div className="col-sm-4">
                                        <b>Doc Frequency:</b>{documentFrequency.result}
                                    </div><br />
                                </div>
                            </div>)
                    })
                }
                {/* <SankeyDiagram graphData={mergedSankeyGraphData} /> */}
                <div style={{ height: 100 }}>&nbsp;</div>

            </div>
        )
    }

}