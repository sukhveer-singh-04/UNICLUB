import { Card, Col, Row, Button, Text, Link } from "@nextui-org/react";

const ClubCard = ({ displayName, name, imageURL }) => (
  <Card css={{ w: "100%", h: "400px" }}>
    <Card.Header
      css={{ position: "absolute", zIndex: 1, top: 5 }}
    ></Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={imageURL}
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#fff" size={18} weight="bold" transform="uppercase">
            {displayName}
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Link href={name}>
              <Button flat color="primary">
                {" "}
                <Text
                  css={{ color: "#000" }}
                  size={15}
                  weight="bold"
                  transform="uppercase"
                >
                  EXPLORE
                </Text>
              </Button>
            </Link>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);

export default ClubCard;

//Button flat auto rounded color="secondary"
