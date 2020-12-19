// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { Container } from 'semantic-ui-react'

import './Home.css'

const Home: FC = () => (
  <>
    <Helmet>
      <title>作品紹介 | SLAM DUNK</title>
    </Helmet>
    <header>
      <h1>『SLAM DUNK』作品紹介</h1>
    </header>
    <Container className="summary">
      <p>
        神奈川県立湘北高校に入学した赤い髪の不良少年である桜木花道は、中学時代に50人の女性から振られ続けたうえに、最後に振られた女性が「バスケ部の小田君」に好意を持っていたため、バスケットボールが大嫌いになっていた。
      </p>
      <p>
        しかし、廊下で自身に声をかけてきた赤木晴子に自身の長身と筋肉、身体能力の高さを見出された花道は、彼女にバスケット部への入部を薦められる。花道は晴子に一目惚れし、バスケットボールは全くの初心者であるにもかかわらず、彼女目当てに入部。その後、地道な練習や試合を通じて徐々にバスケットの面白さに目覚め、その才能の芽を急速に開花させる。湘北バスケ部には、監督である安西光義のもと、晴子の兄でもある主将の赤木剛憲と副主将の木暮公延らに加え、スーパールーキーといわれる流川楓らが加入。さらに、前年度のインターハイ県予選ベスト4である陵南高校との練習試合後には、暴力事件を起こして入院をしていた宮城リョータや、バスケ部から離れていた三井寿も復帰する。
      </p>
      <p>
        夏のインターハイ制覇を目指す湘北は緒戦で前年度のインターハイ県予選ベスト8である三浦台高校を破ると、その後も神奈川県予選を順調に勝ち進み、決勝リーグへの進出を懸けてインターハイ常連校の翔陽高校と対戦し勝利する。続く決勝リーグの初戦で前年度までに過去16年連続インターハイ出場を果たしている強豪校の海南大附属高校と激戦を繰り広げるも、惜敗。しかし、2戦目で前年度のインターハイ県予選ベスト4である武里高校に勝利すると、3戦目では宿敵の陵南を破り準優勝。優勝した海南大附属とともにインターハイ出場を果たす。
      </p>
      <p>
        広島県で行われるインターハイのトーナメント1回戦で、湘北は大阪府代表校の豊玉高校と対戦し、勝利。2回戦では、前年度までのインターハイで3連覇を果たした秋田県代表校の山王工業高校と対戦する。一時は20点以上の差をつけられるが、驚異的な粘りで反撃する。花道は負傷した背中の痛みに耐えながらプレーを続け、試合終了間際のジャンプシュートによる決勝点で湘北を逆転勝利に導く。しかし、全てを出し切った湘北は、続く3回戦で愛知県代表校の愛和学院高校との対戦で、ウソのようにボロ負けした。
        インターハイ後、3年生は赤木と木暮が引退し、三井のみ残留。新キャプテンにリョータが就任し、晴子を新たにマネージャーとして迎えるなど、チームは冬の選抜に向けて、新体制となる。流川は全日本ジュニアの代表に選ばれ、花道はリハビリを続けながら再びコートに立てる時を待つ。
      </p>
    </Container>
  </>
)

export default Home
