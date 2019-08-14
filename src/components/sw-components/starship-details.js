import React from "react";
import ItemDetails, { Record } from "../item-details";
import { SwapiServiceConsumer } from "../swapi-service-context";

const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getStarship }) => {
        return (
          <ItemDetails itemId={itemId} getData={getStarship}>
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
          </ItemDetails>
        );
      }}
    </SwapiServiceConsumer>
  );
};

export default StarshipDetails;
