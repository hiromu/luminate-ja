# Luminate: 大規模言語モデルを用いた人間とAIの共創のための構造化されたデザインスペースの生成と探索

<p align="left">
<a href="https://luminate-research.netlify.app/" target="_blank"><img src="./public/luminate-interface.png" width="100%" style="vertical-align: middle;" alt="G"></img></a>
</p>


### <a href="https://luminate-research.netlify.app/" target="_blank">デモ</a>を試す

概要を知るには、この<a href="https://youtu.be/_H8yt2OS7FE?si=UJ7hpb2B7yX4VfVJ" target="_blank">30秒のプレビュー動画</a>をご覧ください。

### 動機

生成能力のおかげで、生成モデルは現在、創造的なタスクにとって非常に貴重なツールとなっています。視覚的・テキスト的な出力を瞬時に数十から数百生成し、豊富なインスピレーションの源を提供できます。しかし、私たちはそれらを最大限に活用しているでしょうか？現在の対話パラダイム―プロンプトエンジニアリング（`プロンプト入力 -> 応答取得 -> プロンプト改良 -> 応答取得 -> ... 満足するまで繰り返し`）など―は、人々を初期の―潜在的に最適でない―アイデアのセットに急速に収束させ、それらを洗練させることに導きますが、生成能力を使って私たちの創造性を高めることには導きません。

私たちは、生成AIモデルは創造プロセスの初期段階において、個別の成果物ではなくデザインスペース―可能なアイデアの空間―の生成を支援すべきだと主張します。これにより、ユーザーに力を与え、AIの創造的可能性を活用できます。

ユーザーがプロンプトを入力すると、プロンプト内のタスクやトピックに関連する主要な次元（例：物語を書く場合、ジャンル、プロット、トーンなど）と、これらの次元に関連する値（例：ジャンルの場合、SF、ロマンス、コメディなど）を生成できます。これらのLLMで生成された次元と値を使用して、異なる次元値を持つ多数の応答を生成できます。これにより、幅広い可能な応答（例：SF、ロマンス、コメディ）をカバーする、多様な応答/アイデアの体系的な生成が可能になります。

このアプローチの実現可能性と拡張性をテストするために、私たちは提案する対話パラダイムをサポートする新機能を備えたインタラクティブシステムであるLuminateを開発しました。

（出典：https://x.com/sangho_suh/status/1718384100330156398）

---

詳細については、<a href="https://youtu.be/CwVodmRuLds?si=qKHIbdtxWtICXCG8" target="_blank">6分間の動画</a>、<a href="https://x.com/sangho_suh/status/1718384100330156398" target="_blank">ツイート</a>、<a href="https://arxiv.org/abs/2310.12953" target="_blank">論文</a>、または<a href="https://luminate-research.github.io/" target="_blank">プロジェクトページ</a>をご覧ください。

## インストール

初回実行時は、依存関係をインストールしてください（必要：node.js v14.17.0）：

`npm install`

サーバーを実行するには：

```
npm run dev
```

OpenAI APIを使用するには：

1. ディレクトリのルートに`.env`ファイルを作成します。
2. `.env`に以下を追加します：

   ```
   VITE_OPENAI_API_KEY = "{YOUR_OPENAI_API_KEY}"
   ```
3. `{YOUR_OPENAI_API_KEY}`をあなたのOpenAI APIキーに置き換えます


## CHI 2024 論文

**Luminate: 大規模言語モデルを用いた人間とAIの共創のための構造化されたデザインスペースの生成と探索**<br />
Sangho Suh\*, Meng Chen\*, Bryan Min, Toby Jia-Jun Li, Haijun Xia

**このリポジトリのコードやプロンプトを使用した場合は、この論文を引用してください。**

> Sangho Suh, Meng Chen, Bryan Min, Toby Jia-Jun Li, and Haijun Xia. 2024. Luminate: Structured Generation and Exploration of Design Space with Large Language Models for Human-AI Co-Creation. In Proceedings of the CHI Conference on Human Factors in Computing Systems (CHI '24), May 11–16, 2024, Honolulu, HI, USA. ACM, New York, NY, USA, 26 pages. https://dl.acm.org/doi/10.1145/3613904.3642400

## Bibtex（引用形式）

 ```bibtex
 @article{suh2024luminate,
   title = {Luminate: Structured Generation and Exploration of Design Space with Large Language Models for Human-AI Co-Creation},
   author = {Suh, Sangho and Chen, Meng and Min, Bryan and Li, Toby Jia-Jun and Xia, Haijun},
   booktitle = {Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems},
   pages = {1--26},
   year = {2024},
   url = {https://doi.org/10.1145/3613904.3642400},
   doi = {10.1145/3613904.3642400}
 }
 ```

