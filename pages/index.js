import Head from "next/head";
import { Col, Row } from "reactstrap";
import SalesChart from "../src/components/dashboard/SalesChart";
import Feeds from "../src/components/dashboard/Feeds";
import ProjectTables from "../src/components/dashboard/ProjectTable";
import TopCards from "../src/components/dashboard/TopCards";
import Blog from "../src/components/dashboard/Blog";
import bg1 from "../src/assets/images/bg/bg1.jpg";
import bg2 from "../src/assets/images/bg/bg2.jpg";
import bg3 from "../src/assets/images/bg/bg3.jpg";
import bg4 from "../src/assets/images/bg/bg4.jpg";


const BlogData = [
  {
    image: bg1,
    title: "5 exercise to remember",
    subtitle: "50 comments, 800 Like",
    description:
      "Small exercise daily at morning can improve your health very well",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Healthy Fruits That Are Super Nutritious",
    subtitle: "100 comments, 876 Like",
    description:
      "Nutritious food and the fruits can make healthy life",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "The Truth About Sleep",
    subtitle: "77 comments, 634 Like",
    description:
      "An intresting story about the sleep for women at pregnancy period.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Depressed Over Pregnancy Weight Gain",
    subtitle: "33 comments, 46 Like",
    description:
      "Weight gain in pregnant ladies leads to depresssion to them mentally.",
    btnbg: "primary",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>PregMed App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* <Whatsapp/> */}
        {/***Top Cards***/}
        <Row>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-success text-success"
              title="Profit"
              subtitle="Checkups Attended"
              earning="9"
              icon="bi bi-wallet"
            />
          </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-danger text-danger"
              title="Refunds"
              subtitle="CheckUp Needed"
              earning="12"
              icon="bi bi-coin"
            />
          </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-warning text-warning"
              title="New Project"
              subtitle="Checkup Missed"
              earning="3"
              icon="bi bi-basket3"
            />
          </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-info text-into"
              title="Sales"
              subtitle="Baby and Mother health"
              earning="67"
              icon="bi bi-bag"
            />
          </Col>
        </Row>
        {/***Sales & Feed***/}
        <Row>
          <Col sm="12" lg="6" xl="7" xxl="8">
            <SalesChart />
          </Col>
          <Col sm="12" lg="6" xl="5" xxl="4">
            <Feeds />
          </Col>
        </Row>
        {/***Table ***/}
        <Row>
          <Col lg="12" sm="12">
            <ProjectTables />
          </Col>
        </Row>
        {/***Blog Cards***/}
        <Row>
          {BlogData.map((blg) => (
            <Col sm="6" lg="6" xl="3" key={blg.title}>
              <Blog
                image={blg.image}
                title={blg.title}
                subtitle={blg.subtitle}
                text={blg.description}
                color={blg.btnbg}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
