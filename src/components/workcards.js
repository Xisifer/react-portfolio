import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

const WorkCard = (props) => {
  return (
    <React.Fragment>
    <div className="cardDiv">
      <Card>
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.description}</CardText>
          <Button href={props.github}>GitHub Link</Button>
          <br/>
          <Button href={props.livepage}>{props.livelabel}</Button>
        </CardBody>
      </Card>
    </div>
    </React.Fragment>
  );
};

export default WorkCard;