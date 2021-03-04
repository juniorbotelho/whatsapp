import { AiFillAndroid, AiFillApple } from 'react-icons/ai'
import { MdDesktopMac } from 'react-icons/md'

import HomeLayout from '../layout/home.layout'
import Title from '../components/title'
import Text from '../components/text'
import { FlatButton } from '../components/button'

const Home = () => (
  <HomeLayout>
    <div data-key="container" className="container_text">
      <Title>
        Simples. Seguro.<br/>
        Troque mensagens com confiança.
      </Title>

      <Text>
        Com o WhatsApp, suas mensagens e chamadas são rápidas, simples, seguras e <span>gratuitas
        <sup>*</sup>.</span> Disponível para celulares em todo o mundo.
      </Text>

      <Text type="minitext mb_high">
        <sup>*</sup>Sujeitas à cobrança de dados. Entre em contato com sua
        operadora para mais informações.
      </Text>

      <FlatButton title="Android">
        <AiFillAndroid
          size={20}
          color="#1dbea5" />
      </FlatButton>

      <FlatButton title="iPhone">
        <AiFillApple
          size={20}
          color="#1dbea5" />
      </FlatButton>

      <FlatButton title="Mac ou Windows">
        <MdDesktopMac
          size={20}
          color="#1dbea5" />
      </FlatButton>
    </div>
    <div data-key="container" className="container_cellphone">
      <div className="container_whatsapp"></div>
    </div>
  </HomeLayout>
)

export default Home
