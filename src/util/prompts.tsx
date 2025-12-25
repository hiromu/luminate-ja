export const dimensionDef : string = `次元は、ユーザーにとって質的で主観的なカテゴリカルな次元値（属性）を含みます。つまり、次元値を選択する際に正解はありません。ユーザーは好みに応じて任意の次元値を選択できる必要があります。次元は、文章の良し悪しの評価であってはなりません。すべての応答は、あなたが生成した最高の文章であると想定されます。\n\n`

export const dimensionConclusion : string = `これらの例のいくつかが最適であれば使用することをお勧めしますが、ユニークで直交する次元も提供することを強く推奨します。\n\n`

export const nominalDimensionDef : string = dimensionDef + `名目次元には、特定の順序を持たず、ユーザーの選択に委ねられる次元値が含まれます。私が望む名目次元の例としては、トーン、設定、スタイル、視点などがあります。長さ、文法、品質、明確さなどは望みません。\n\n` + dimensionConclusion;

export const ordinalDimensionDef : string = dimensionDef + `順序次元には、順序付けて測定される次元値（最小、少ない、中立、多い、最大）が含まれます。私が望む次元のタイプは、ユーザーが好みに応じて増減させたい単一の主要な特性を持つものです。私が望む順序次元の例としては、具体性、リアリズム、主観性などがあります。品質、創造性、長さなどは望みません。\n\n` + dimensionConclusion;
