import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { ReactNode } from "react";

interface SidebarDrawerProviderProps{
    children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData) 

export function SidebarDrawerProvider({children}: SidebarDrawerProviderProps){
    const disclosure = useDisclosure()
    const router = useRouter()

    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])
    return(
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)