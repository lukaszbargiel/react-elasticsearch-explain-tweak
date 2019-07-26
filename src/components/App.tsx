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

        return <div onClick={() => this.forceUpdate()}>
            <SankeyDiagram graphData={mergedSankeyGraphData} />
            <div style={{ height: 100 }}>&nbsp;</div>

        </div>
    }

}