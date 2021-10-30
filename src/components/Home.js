import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundIMG="model-s.jpg"
                leftBtnText="CUSTOM ORDER"
                rigthBtnText="EXISTING INVENTORY"
            />
             <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundIMG="model-y.jpg"
                leftBtnText="CUSTOM ORDER"
                rigthBtnText="EXISTING INVENTORY"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundIMG="model-3.jpg"
                leftBtnText="CUSTOM ORDER"
                rigthBtnText="EXISTING INVENTORY"
            />
            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundIMG="model-x.jpg"
                leftBtnText="CUSTOM ORDER"
                rigthBtnText="EXISTING INVENTORY"
            />
            <Section
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                backgroundIMG="model-y.jpg"
                leftBtnText="CUSTOM ORDER"
                rigthBtnText="EXISTING INVENTORY"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundIMG="solar-roof.jpg"
                leftBtnText="CUSTOM ORDER"
                rigthBtnText="EXISTING INVENTORY"
            />
            <Section
                title="ACCESSORY"
                description="Produce Clean Energy From Your Roof"
                backgroundIMG="accessories.jpg"
                leftBtnText="LEARN MORE"
            />
        </Container>
    );
}
export default Home;
const Container = styled.div`
    heigth: 100vh
`