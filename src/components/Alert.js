import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const { isOpen, type, alertMessage, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success";
  const getBackgroundColor = isSuccess ? '#81C784' : '#FF8A65'
  const getMessage = isSuccess ? 'All good!' : 'Oops!'

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent py={4} backgroundColor={getBackgroundColor}>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {getMessage}
          </AlertDialogHeader>
          <AlertDialogBody>{alertMessage}</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
