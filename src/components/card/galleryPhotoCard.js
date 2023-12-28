import React from 'react';
import { Image, useDisclosure, Modal, ModalOverlay, ModalContent, Center, ModalBody, 
} from '@chakra-ui/react';

const GalleryPhotoCard = (props) => {
    return (
        <>
            {props.imageGalleryData.map((imageData, index) => (
                <GalleryImage key={imageData.imageId} imageData={imageData} />
            ))}
        </>
    );
};

const GalleryImage = ({ imageData }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
                <Center>
                <Image
                    src={`/uploads/galleryImages/${imageData.image}`}
                    alt={imageData.imageTitle}
                    rounded={"10px"}
                    border={"2px solid white"}
                    objectFit='stretch'
                    h='auto'
                    onClick={onOpen}
                />
                </Center>
            <Modal isOpen={isOpen} onClose={onClose} size='xl' zIndex={9999} >
                    <ModalOverlay />
                    <ModalContent maxW={'80%'}>
                        <ModalBody>
                            <Center>
                                <Image
                                rounded="10px"
                                    py={3}
                                    src={`/uploads/galleryImages/${imageData.image}`}
                                    alt="gallery image"
                                    objectFit='contain'
                                    // w='auto'
                                    maxH='90vh'
                                />
                            </Center>
                        </ModalBody>
                    </ModalContent>
            </Modal>
        </>
    );
};

export default GalleryPhotoCard;
