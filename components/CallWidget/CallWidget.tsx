import React, { useState, useEffect } from "react"
import {
    CallWidgetButton,
    CallWidgetWrapper,
    CallWidgetMessage

} from "./CallWidget.styles"

import Modal from "@components/Modal"
import Input from "@components/Input"
import Button from "@components/Button"
import Alert from "@components/Alert"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPhone,
} from '@fortawesome/free-solid-svg-icons'

import { CallWidgetProps } from "./CallWidget.d"
import axios from "axios";

const CallWidget: React.FC<CallWidgetProps> = () => {

    const [isPhoneModalOpen, setPhoneModalOpen] = useState(false)
    const [mailSent, setmailSent] = useState(false);
    const [error, setError] = useState(null);

    const [showMessage, setShowMessage] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
    });

    const API_PATH = '/api/callWidget/index.php';

    const handleChange = (e, field) => {
        let value = e.target.value;
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    const handleMessageShow = (value) => {
        setShowMessage(false)
        localStorage.setItem('callModalClick', value)
    }

    useEffect(() => {
        const isCallModalClose = localStorage.getItem('callModalClick')
       if(!isCallModalClose) {
        setTimeout(() => {
            setShowMessage(true)
        }, 4000);
       }
    }, []);

    const handleFormSubmit = e => {
        e.preventDefault();
        axios({
            method: "post",
            url: `${API_PATH}`,
            headers: { "content-type": "application/json" },
            data: formData
        })
            .then(result => {
                if (result.data.sent) {
                    setmailSent(result.data.sent)
                    setError(false)
                } else {
                    setError(true)
                }
            })
            .catch(error => setError( error.message ));
    };

    return (
        <>
            <CallWidgetWrapper>
                {showMessage && <CallWidgetMessage>
                    <h4>???? Zainteresowa??a Ci?? nasza oferta?</h4>
                    <p>Chcia??by?? ??eby??my do Ciebie zadzwonili? Zostaw nam sw??j numer.</p>
                    <Button
                        name={"Tak"}
                        onClick={() => {
                            setPhoneModalOpen(true)
                            handleMessageShow(false)
                        }}
                    />
                    <a
                        href="javascript:void(0);"
                        onClick={() => handleMessageShow(false)}
                    >
                        Nie, dzi??kuj??
                    </a>
                </CallWidgetMessage>}
                <CallWidgetButton onClick={() => setPhoneModalOpen(true)}>
                    <FontAwesomeIcon color="#172e57" icon={faPhone} />
                </CallWidgetButton>
            </CallWidgetWrapper>
            {
                isPhoneModalOpen
                && <Modal
                    title="Zam??w po????czenie"
                    text="Oddzwonimy"
                    isOpen={isPhoneModalOpen}
                    isClose={() => setPhoneModalOpen(false)}
                >
                    {mailSent && <Alert text={"Dzi??kujemy. Postaramy si?? zadzwoni?? najszybciej jak to tylko mo??liwe."} />}
                    {error && <Alert variant={'danger'} text={"Uzupe??nij wszystkie pola."} />}
                    <Input
                        value={formData.name}
                        label="Imi??"
                        onChange={e => handleChange(e, 'name')}
                    />
                    <Input
                        type="number"
                        value={formData.phone}
                        label="Numer telefonu"
                        onChange={e => handleChange(e, 'phone')}
                    />
                    <Button
                        name="Zamawiam"
                        onClick={(e: React.MouseEvent) => handleFormSubmit(e)}
                    />
                </Modal>
            }
        </>
    )
}

export default CallWidget;