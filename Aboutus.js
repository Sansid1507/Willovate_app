import React from "react";
import { Container, Typography, Box } from "@mui/material";

const AboutUs = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", padding: "80px 0" }}>
      <Container maxWidth="lg">
        {/* Title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          sx={{ marginBottom: "40px", color: "#000" }}
        >
          About Us
        </Typography>

        {/* Image and Text Wrapper */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: "40px",
          }}
        >
          {/* Left Side - Image */}
          <Box
            component="img"
            src={require("../assets/heroBg.jpeg")} // Update with your image path
            alt="About Us"
            sx={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              borderRadius: "10px",
            }}
          />

          {/* Right Side - Text Content */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="body1" color="textSecondary">
              We are dedicated to providing innovative solutions that redefine the future.
            </Typography>
            <Typography variant="body1" color="textSecondary" mt={1}>
              Our mission is to bridge the gap between technology and creativity, making life simpler and smarter.
            </Typography>
            <Typography variant="body1" color="textSecondary" mt={1}>
              With a passionate team and cutting-edge technology, we aim to deliver exceptional user experiences. Join us on our journey to create something truly remarkable!
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
