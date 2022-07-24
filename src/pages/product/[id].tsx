import { Box, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
    const { id } = useParams()
    return (
        <Box>
            <Text as="h1" bg={"red"}>ID of product is {id}</Text>
        </Box>
    );
    }
export default SingleProduct;