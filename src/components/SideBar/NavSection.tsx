import { Box, Icon, Link, Stack,Text } from "@chakra-ui/react";
import React from "react";
import { ReactNode } from "react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

interface NavSectionProps{
    title: string
    children: ReactNode
}

export function NavSection({title, children}) {
    return (
        <Box>
        <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
        <Stack spacing="4" mt="8" align="stretch">
          {children}
        </Stack>
    </Box>
    )
}