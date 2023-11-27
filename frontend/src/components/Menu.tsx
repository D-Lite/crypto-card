import { Box, Button, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, IconButton, VStack, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import { FiMenu } from "react-icons/fi"

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = useState<"left" | "right">('right')

  return (
    <Box position="relative" bgColor={'gray.100'}>
      <Container maxW={'6xl'} position="relative">
        <IconButton
          icon={<FiMenu />}
          onClick={onOpen}
          variant="outline"
          aria-label="Open Menu"
          size="lg"
          position="absolute"
          top={4}
          right={4}
        />

        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4}>
                <Button as="a" href="/" w="100%">Home</Button>
                <Button as="a" href="/about" w="100%">About</Button>
                <Button as="a" href="/login" w="100%">Login</Button>
                <Button as="a" href="/contacts" w="100%">Contacts</Button>
              </VStack>
            </DrawerBody>
            <DrawerFooter>
              {/* Add any footer content here */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Container>
    </Box>
  )
}

export default Menu
