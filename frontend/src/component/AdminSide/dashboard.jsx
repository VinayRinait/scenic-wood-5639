import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );
// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "left",
//     },
//     title: {
//       display: true,
//       text: "Order Details",
//     },
//   },
// };
// const labels = ["January", "February", "March", "April", "May", "June", "July"];
// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Orders",
//       data: [10, 20, 50, 10, 45, 35, 21],
//       backgroundColor: "#00b5b8",
//     },
//   ],
// };

import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [wheyData, setWheyData] = useState([]);
  const [Equipment, setEquipment] = useState([]);
  const [Ayurvedic, setAyurvedic] = useState([]);
  const [Juice, setJuice] = useState([]);
  const [food, setFood] = useState([]);
  const [gainer, setGainers] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`dummyData/WheyProtien`)
  //     .then((res) => setWheyData(res.data));
  //   axios
  //     .get(`dummyData/Equipments`)
  //     .then((res) => setEquipment(res.data));
  //   axios
  //     .get(`dummyData/Ayurvedic`)
  //     .then((res) => setAyurvedic(res.data));
  //   axios
  //     .get(`dummyData/Healthy_Juice`)
  //     .then((res) => setJuice(res.data));
  //   axios
  //     .get(`dummyData/Protien-Foods`)
  //     .then((res) => setFood(res.data));
  //   axios
  //     .get(`dummyData/Gainers`)
  //     .then((res) => setGainers(res.data));
  // }, []);
  return (
    <Box
      color={"white"}
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}
      bg={"#0c0e1f"}
    >
      <Heading>Dashboard</Heading>
      <Text color={"#00b5b8"}>Welcome to Dashboard</Text>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
        width={{ base: "100%", md: "100%", lg: "95%" }}
        m={"auto"}
        mt={2}
        spacingY={10}
      >
        <Box
          mt={"10px"}
          height={"220px"}
          width={"220px"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          textAlign={"center"}
          ml={"40px"}
        >
          <Heading color={"yellow"} fontSize={"100px"}>
            {/* {wheyData?.length} */}
          </Heading>
          <Text fontSize={"20px"}>Active Listings</Text>
          <Text color={"#00b5b8"} fontSize={"30px"}>
            Mens
          </Text>
        </Box>
        <Box
          mt={"10px"}
          height={"220px"}
          width={"220px"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          textAlign={"center"}
          ml={"40px"}
        >
          <Heading color={"yellow"} fontSize={"100px"}>
            {/* {Ayurvedic?.length} */}
          </Heading>
          <Text fontSize={"20px"}>Active Listings</Text>
          <Text color={"#00b5b8"} fontSize={"30px"}>
            Womens
          </Text>
        </Box>
        <Box
          mt={"10px"}
          height={"220px"}
          width={"220px"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          textAlign={"center"}
          ml={"40px"}
        >
          <Heading color={"yellow"} fontSize={"100px"}>
            {/* {Equipment?.length} */}
          </Heading>
          <Text fontSize={"20px"}>Active Listings</Text>
          <Text color={"#00b5b8"} fontSize={"30px"}>
            Kids
          </Text>
        </Box>
        <Box
          mt={"10px"}
          height={"220px"}
          width={"220px"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          textAlign={"center"}
          ml={"40px"}
        >
          <Heading color={"yellow"} fontSize={"100px"}>
            {/* {food?.length} */}
          </Heading>
          <Text fontSize={"20px"}>Active Listings</Text>
          <Text color={"#00b5b8"} fontSize={"30px"}>
            Boots
          </Text>
        </Box>
        <Box
          mt={"10px"}
          height={"220px"}
          width={"220px"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          textAlign={"center"}
          ml={"40px"}
        >
          <Heading color={"yellow"} fontSize={"100px"}>
            {/* {gainer?.length} */}
          </Heading>
          <Text fontSize={"20px"}>Active Listings</Text>
          <Text color={"#00b5b8"} fontSize={"30px"}>
            Sandles
          </Text>
        </Box>
        <Box
          mt={"10px"}
          height={"220px"}
          width={"220px"}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 4px, rgba(0, 0, 0, 0.3) 0px 5px 10px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
          textAlign={"center"}
          ml={"40px"}
        >
          <Heading color={"yellow"} fontSize={"100px"}>
            {/* {Juice?.length} */}
          </Heading>
          <Text fontSize={"20px"}>Active Listings</Text>
          <Text color={"#00b5b8"} fontSize={"30px"}>
            Loafers
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;
