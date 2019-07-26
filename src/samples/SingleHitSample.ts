import { ExplainScoreComponent } from "../models/parsers/Parser";

export default {
    "value": 687.574646,
    "description": "sum of:",
    "details": [
        {
            "value": 687.574646,
            "description": "filters explain",
            "details": [
                {
                    "value": 5.729789,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 5.729789,
                            "description": "sum of:",
                            "details": [
                                {
                                    "value": 5.729789,
                                    "description": "sum of:",
                                    "details": [
                                        {
                                            "value": 2.92034984,
                                            "description": "max plus 0.1 times others of:",
                                            "details": [
                                                {
                                                    "value": 1.4032023,
                                                    "description": "weight(itemname.text:men in 533) [PerFieldSimilarity], result of:",
                                                    "details": [
                                                        {
                                                            "value": 1.4032023,
                                                            "description": "score(doc=533,freq=1.0 = termFreq=1.0\n), product of:",
                                                            "details": [
                                                                {
                                                                    "value": 2.11938214,
                                                                    "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                                                    "details": [
                                                                        {
                                                                            "value": 113.0,
                                                                            "description": "docFreq",
                                                                            "details": []
                                                                        },
                                                                        {
                                                                            "value": 944.0,
                                                                            "description": "docCount",
                                                                            "details": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "value": 0.6620808,
                                                                    "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                                                    "details": [
                                                                        {
                                                                            "value": 1.0,
                                                                            "description": "termFreq=1.0",
                                                                            "details": []
                                                                        },
                                                                        {
                                                                            "value": 1.2,
                                                                            "description": "parameter k1",
                                                                            "details": []
                                                                        },
                                                                        {
                                                                            "value": 0.75,
                                                                            "description": "parameter b",
                                                                            "details": []
                                                                        },
                                                                        {
                                                                            "value": 3.559322,
                                                                            "description": "avgFieldLength",
                                                                            "details": []
                                                                        },
                                                                        {
                                                                            "value": 8.0,
                                                                            "description": "fieldLength",
                                                                            "details": []
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "value": 2.78002954,
                                                    "description": "weight(image:men in 533) [PerFieldSimilarity], result of:",
                                                    "details": [
                                                        {
                                                            "value": 2.78002954,
                                                            "description": "score(doc=533,freq=1.0 = termFreq=1.0\n), product of:",
                                                            "details": [
                                                                {
                                                                    "value": 3.50145388,
                                                                    "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                                                    "details": [
                                                                        {
                                                                            "value": 27.0,
                                                                            "description": "docFreq",
                                                                            "details": []
                                                                        },
                                                                        {
                                                                            "value": 911.0,
                                                                            "description": "docCount",
                                                                            "details": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "value": 0.7939643,
                                                                    "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                                                    "details": [
                                                                        {
                                                                            "value": 1.0,
                                                                            "description": "termFreq=1.0",
                                                                            "details": []
                                                                        },
                                                                        {
                                                                            "value": 1.2,
                                                                            "description": "parameter k1",
                                                                            "details": []
                                                                        },
                                                                        {
                                                                            "value": 0.75,
                                                                            "description": "parameter b",
                                                                            "details": []
                                                                        },
                                                                        {
                                                                            "value": 10.4017563,
                                                                            "description": "avgFieldLength",
                                                                            "details": []
                                                                        },
                                                                        {
                                                                            "value": 17.0,
                                                                            "description": "fieldLength",
                                                                            "details": []
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "value": 2.809439,
                                            "description": "max plus 0.1 times others of:",
                                            "details": [
                                                {
                                                    "value": 2.809439,
                                                    "description": "weight(image:jacket in 533) [PerFieldSimilarity], result of:",
                                                    "details": [
                                                        {
                                                            "value": 2.809439,
                                                            "description": "score(doc=533,freq=1.0 = termFreq=1.0\n), product of:",
                                                            "details": [
                                                                {
                                                                    "value": 3.5384953,
                                                                    "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                                                    "details": [
                                                                        {
                                                                            "value": 26.0,
                                                                            "description": "docFreq",
                                                                            "details": []
                                                                        },
                                                                        {
                                                                            "value": 911.0,
                                                                            "description": "docCount",
                                                                            "details": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "value": 0.7939643,
                                                                    "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                                                    "details": [
                                                                        {
                                                                            "value": 1.0,
                                                                            "description": "termFreq=1.0",
                                                                            "details": []
                                                                        },
                                                                        {
                                                                            "value": 1.2,
                                                                            "description": "parameter k1",
                                                                            "details": []
                                                                        },
                                                                        {
                                                                            "value": 0.75,
                                                                            "description": "parameter b",
                                                                            "details": []
                                                                        },
                                                                        {
                                                                            "value": 10.4017563,
                                                                            "description": "avgFieldLength",
                                                                            "details": []
                                                                        },
                                                                        {
                                                                            "value": 17.0,
                                                                            "description": "fieldLength",
                                                                            "details": []
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "value": 0.0,
                    "description": "COMPUTED TOTAL BOOST: 120.0",
                    "details": [
                        {
                            "value": 0.0,
                            "description": "hawk booster, product of:",
                            "details": [
                                {
                                    "value": 0.0,
                                    "description": "match filter: +isonsale.raw:Yes",
                                    "details": []
                                },
                                {
                                    "value": 5.729789,
                                    "description": "CONST BOOST: 71.0",
                                    "details": []
                                }
                            ]
                        },
                        {
                            "value": 0.0,
                            "description": "hawk booster, product of:",
                            "details": [
                                {
                                    "value": 0.0,
                                    "description": "match filter: +isonsale.raw:Yes",
                                    "details": []
                                },
                                {
                                    "value": 5.729789,
                                    "description": "CONST BOOST: 49.0",
                                    "details": []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "value": 0.0,
            "description": "match on required clause, product of:",
            "details": [
                {
                    "value": 0.0,
                    "description": "# clause",
                    "details": []
                },
                {
                    "value": 1.0,
                    "description": "DocValuesFieldExistsQuery [field=_primary_term]",
                    "details": []
                }
            ]
        }
    ]
} as ExplainScoreComponent;