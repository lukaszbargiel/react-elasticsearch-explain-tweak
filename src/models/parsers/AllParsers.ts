
import { BoostParser } from "./specific/BoostParser";
import { FieldWeightSimilarityParser } from "./specific/FieldWeightSimilarityParser";
import { IdfParser } from "./specific/IdfParser";
import { MaxOfParser } from "./specific/MaxOfParser";
import { SumOfParser } from "./specific/SumOfParser";
import { TfNormParser } from "./specific/TfNormParser";
import { ScoreParser } from "./specific/ScoreParser";
import { OtherFilterParser } from "./specific/OtherFilterParser";


const allParsers = [
    new BoostParser(),
    new FieldWeightSimilarityParser(),
    new IdfParser(),
    new TfNormParser(),
    new ScoreParser(),
    new MaxOfParser(),
    new SumOfParser(),
    new OtherFilterParser()
];

export function getAllParsers() {
    return allParsers;
}