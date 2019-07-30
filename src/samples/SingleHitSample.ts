import { ExplainScoreComponent } from "../models/parsers/Parser";

export default {
    "value": 1248.75854,
    "description": "sum of:",
    "details": [
        {
            "value": 1248.75854,
            "description": "filters explain",
            "details": [
                {
                    "value": 10.4063215,
                    "description": "sum of:",
                    "details": [
                        {
                            "value": 10.4063215,
                            "description": "sum of:",
                            "details": [
                                {
                                    "value": 10.4063215,
                                    "description": "sum of:",
                                    "details": [
                                        {
                                            "value": 2.900422,
                                            "description": "max plus 0.1 times others of:",
                                            "details": [
                                                {
                                                    "value": 2.900422,
                                                    "description": "weight(brand.text:columbia in 553) [PerFieldSimilarity], result of:",
                                                    "details": [
                                                        {
                                                            "value": 2.900422,
                                                            "description": "score(doc=553,freq=1.0 = termFreq=1.0\n), product of:",
                                                            "details": [
                                                                {
                                                                    "value": 2.900422,
                                                                    "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                                                    "details": [
                                                                        {
                                                                            "value": 49.0,
                                                                            "description": "docFreq",
                                                                            "details": []
                                                                        },
                                                                        {
                                                                            "value": 899.0,
                                                                            "description": "docCount",
                                                                            "details": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "value": 1.0,
                                                                    "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1) from:",
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
                                                                            "value": 0.0,
                                                                            "description": "parameter b (norms omitted for field)",
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
                                            "value": 3.0726862,
                                            "description": "max plus 0.1 times others of:",
                                            "details": [
                                                {
                                                    "value": 1.97302556,
                                                    "description": "weight(itemname.text:men in 553) [PerFieldSimilarity], result of:",
                                                    "details": [
                                                        {
                                                            "value": 1.97302556,
                                                            "description": "score(doc=553,freq=1.0 = termFreq=1.0\n), product of:",
                                                            "details": [
                                                                {
                                                                    "value": 2.25525117,
                                                                    "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                                                    "details": [
                                                                        {
                                                                            "value": 99.0,
                                                                            "description": "docFreq",
                                                                            "details": []
                                                                        },
                                                                        {
                                                                            "value": 948.0,
                                                                            "description": "docCount",
                                                                            "details": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "value": 0.874858439,
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
                                                                            "value": 3.70464134,
                                                                            "description": "avgFieldLength",
                                                                            "details": []
                                                                        },
                                                                        {
                                                                            "value": 5.0,
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
                                                    "value": 2.87538362,
                                                    "description": "weight(image:men in 553) [PerFieldSimilarity], result of:",
                                                    "details": [
                                                        {
                                                            "value": 2.87538362,
                                                            "description": "score(doc=553,freq=1.0 = termFreq=1.0\n), product of:",
                                                            "details": [
                                                                {
                                                                    "value": 3.17371535,
                                                                    "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                                                    "details": [
                                                                        {
                                                                            "value": 38.0,
                                                                            "description": "docFreq",
                                                                            "details": []
                                                                        },
                                                                        {
                                                                            "value": 919.0,
                                                                            "description": "docCount",
                                                                            "details": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "value": 0.905999243,
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
                                                                            "value": 10.3699675,
                                                                            "description": "avgFieldLength",
                                                                            "details": []
                                                                        },
                                                                        {
                                                                            "value": 13.0,
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
                                            "value": 4.433213,
                                            "description": "max plus 0.1 times others of:",
                                            "details": [
                                                {
                                                    "value": 4.433213,
                                                    "description": "weight(Synonym(itemname.text:coat itemname.text:jacket) in 553) [PerFieldSimilarity], result of:",
                                                    "details": [
                                                        {
                                                            "value": 4.433213,
                                                            "description": "score(doc=553,freq=2.0 = termFreq=2.0\n), product of:",
                                                            "details": [
                                                                {
                                                                    "value": 3.54122281,
                                                                    "description": "idf, computed as log(1 + (docCount - docFreq + 0.5) / (docFreq + 0.5)) from:",
                                                                    "details": [
                                                                        {
                                                                            "value": 27.0,
                                                                            "description": "docFreq",
                                                                            "details": []
                                                                        },
                                                                        {
                                                                            "value": 948.0,
                                                                            "description": "docCount",
                                                                            "details": []
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    "value": 1.25188768,
                                                                    "description": "tfNorm, computed as (freq * (k1 + 1)) / (freq + k1 * (1 - b + b * fieldLength / avgFieldLength)) from:",
                                                                    "details": [
                                                                        {
                                                                            "value": 2.0,
                                                                            "description": "termFreq=2.0",
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
                                                                            "value": 3.70464134,
                                                                            "description": "avgFieldLength",
                                                                            "details": []
                                                                        },
                                                                        {
                                                                            "value": 5.0,
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
                                    "value": 10.4063215,
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
                                    "value": 10.4063215,
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