import {
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Image,
} from '@nextui-org/react';
import { FC } from 'react';

interface Props {
  setVisible: (visible: boolean) => void;
  visible: boolean;
}

export const OpenBox: FC<Props> = ({ setVisible, visible }) => {
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };

  return (
    <div>
      <Button auto shadow onClick={() => setVisible(true)}>
        Open modal
      </Button>
      <Modal
        blur
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Congrats
            <Text b size={18}>
              {' '}
              You have won!
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Image
            src="/boxes/crystal.gif"
            alt="circus"
            width={'100%'}
            height={'100%'}
            objectFit="fill"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
