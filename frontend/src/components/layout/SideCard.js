import React, { Fragment } from "react";
import {
    Button, UncontrolledAlert, Card, CardImg, CardBody,
    CardTitle, CardSubtitle, CardText
  } from 'reactstrap';
   
const SideCard = () => (
    <Fragment>
      <UncontrolledAlert color="danger" className="d-none d-lg-block">
        <strong>Account not activated.</strong>
      </UncontrolledAlert>
      
      <Card>
        
        <CardBody>
          <CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">Glad Chinda</CardTitle>
          <CardSubtitle className="text-secondary mb-3 font-weight-light text-uppercase" style={{ fontSize: '0.8rem' }}>Web Developer, Lagos</CardSubtitle>
          <CardText className="text-secondary mb-4" style={{ fontSize: '0.75rem' }}>Full-stack web developer learning new hacks one day at a time. Web technology enthusiast. Hacking stuffs @theflutterwave.</CardText>
          <Button color="success" className="font-weight-bold">View Profile</Button>
        </CardBody>
      </Card>
    </Fragment>
  );
   
  export default SideCard;