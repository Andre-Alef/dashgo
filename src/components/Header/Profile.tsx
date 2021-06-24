import {Flex, Box, Text,Avatar} from "@chakra-ui/react"
export function Profile() {
    return (
        <Flex align="center">
        <Box mr="4" textAlign="right">
            <Text>Nome</Text>
            <Text color="gray.300" fontSize="small">Email</Text>
        </Box>
        <Avatar size="md" name="Andre" src="https://github.com/andre-alef.png"/>
    </Flex>
    )
}