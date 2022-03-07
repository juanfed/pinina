/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Typography, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { checkEmailModalStyles } from '../../assets/css/js/checkEmailModalStyles';
//icons
// import { set_check_email_modal_action } from '../redux/actions/loginAction';
import { useRef, useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'next/link';

export default function CheckEmailModal({
    verifyMsg,
    setVerifyCode,
    setSubmitCode,
    registrySuccess,
    setRegisterToLogin,
    generateCode,
    checkEmailModal
}) {
    const inputRef_1 = useRef();
    const inputRef_2 = useRef();
    const inputRef_3 = useRef();
    const inputRef_4 = useRef();
    const inputRef_5 = useRef();
    const inputRef_6 = useRef();
    const currentInput_1 = inputRef_1.current;
    const currentInput_2 = inputRef_2.current;
    const currentInput_3 = inputRef_3.current;
    const currentInput_4 = inputRef_4.current;
    const currentInput_5 = inputRef_5.current;
    const currentInput_6 = inputRef_6.current;
    const [readInput_2, setReadInput_2] = useState(true);
    const [readInput_3, setReadInput_3] = useState(true);
    const [readInput_4, setReadInput_4] = useState(true);
    const [readInput_5, setReadInput_5] = useState(true);
    const [readInput_6, setReadInput_6] = useState(true);
    const [fullCode, setFullCode] = useState('')
    const [code, setCode] = useState({
        verify_code_1: '',
        verify_code_2: '',
        verify_code_3: '',
        verify_code_4: '',
        verify_code_5: '',
        verify_code_6: ''
    });
    const [sendButton, setSendButton] = useState(true);
    const [checkInput, setCheckInput] = useState(true);
    const [checkFullInput, setCheckFullInput] = useState(false);
    const {
        verify_code_1,
        verify_code_2,
        verify_code_3,
        verify_code_4,
        verify_code_5,
        verify_code_6
    } = code;
    const classes = checkEmailModalStyles();
    const [waitTime, setWaitTime] = useState(false)
    const [time, setTime] = useState(60);
    const [validityMinutes, setValidityMinutes] = useState(29);
    const [validitySeconds, setValiditySeconds] = useState(59);
    const [minuteZero, setMinuteZero] = useState(false);
    const [secondZero, setSecondZero] = useState(false);
    const [displayExpires, setDisplayExpires] = useState(true);
    const handleChange = ({ target }) => {
        setCode({
            ...code,
            [target.name]: target.value.trim()
        })
    };
    useEffect(() => {
        if (verify_code_1.length === 6) {
            setFullCode(verify_code_1);
        }
    }, [verify_code_1])
    useEffect(() => {
        if (fullCode.length === 6) {
            setCode({
                verify_code_1: fullCode.charAt(0),
                verify_code_2: fullCode.charAt(1),
                verify_code_3: fullCode.charAt(2),
                verify_code_4: fullCode.charAt(3),
                verify_code_5: fullCode.charAt(4),
                verify_code_6: fullCode.charAt(5)
            })
        }
    }, [fullCode]);
    const checkGenCode = () => {
        generateCode();
        setWaitTime(true);
        setDisplayExpires(false);
    };

    useEffect(() => {
        setWaitTime(true);
    }, []);

    useEffect(() => {
        if (verifyMsg === 'Se ha enviado codigo de verificación a su correo de registro') {
            setDisplayExpires(true);
        } else {
            setDisplayExpires(false);
        }
    }, [verifyMsg]);

    useEffect(() => {
        if (!displayExpires) {
            setValiditySeconds(59);
            setValidityMinutes(29);
        }
    }, [displayExpires])

    useEffect(() => {
        if (checkInput) {
            if (verify_code_1.length === 1) {
                currentInput_2.focus();
                setReadInput_2(false)
                if (verify_code_2.length === 1) {
                    setReadInput_3(false)
                    currentInput_3.focus();
                    if (verify_code_3.length === 1) {
                        setReadInput_4(false)
                        currentInput_4.focus();
                        if (verify_code_4.length === 1) {
                            setReadInput_5(false)
                            currentInput_5.focus();
                            if (verify_code_5.length === 1) {
                                setReadInput_6(false)
                                currentInput_6.focus();
                                setCheckInput(false);
                                setCheckFullInput(true);
                            };
                        };
                    };
                };
            };
        };
    }, [code]);

    useEffect(() => {
        if (checkFullInput) {
            if (verify_code_6.length === 0) {
                setReadInput_6(true);
                currentInput_5.focus();
                if (verify_code_5.length === 0) {
                    setReadInput_5(true);
                    currentInput_4.focus();
                    if (verify_code_4.length === 0) {
                        setReadInput_4(true);
                        currentInput_3.focus();
                        if (verify_code_3.length === 0) {
                            setReadInput_3(true);
                            currentInput_2.focus();
                            if (verify_code_2.length === 0) {
                                setReadInput_2(true);
                                currentInput_1.focus();
                                setCheckFullInput(false);
                                setCheckInput(true);
                            };
                        };
                    };
                };
            };
        };
    }, [code]);

    useEffect(() => {
        if (verify_code_1.trim().length &&
            verify_code_2.trim().length &&
            verify_code_3.trim().length &&
            verify_code_4.trim().length &&
            verify_code_5.trim().length &&
            verify_code_6.trim().length === 0) {
            setCheckInput(true);
        }
    }, [code]);

    useEffect(() => {
        if (verify_code_1.trim().length &&
            verify_code_2.trim().length &&
            verify_code_3.trim().length &&
            verify_code_4.trim().length &&
            verify_code_5.trim().length &&
            verify_code_6.trim().length === 1) {
            setVerifyCode(`${verify_code_1}${verify_code_2}${verify_code_3}${verify_code_4}${verify_code_5}${verify_code_6}`)
            setSendButton(false);
        } else {
            setSendButton(true);
        }
    }, [code]);

    const handleNextStep = () => {
        setRegisterToLogin(true);
    };

    useEffect(() => {
        if (waitTime) {
            if (time > 0) {
                setTimeout(() => {
                    setTime(time - 1)
                }, 1000);
            } else {
                setWaitTime(false);
                setTime(59);
            }
        }
    }, [time, waitTime]);

    useEffect(() => {
        if (displayExpires) {
            if (validitySeconds > 0) {
                if (validitySeconds.length === 1) {
                    setSecondZero(true);
                } else {
                    setSecondZero(false);
                }
                setTimeout(() => {
                    setValiditySeconds(validitySeconds - 1)
                }, 1000);
            }
        }
    }, [validitySeconds, displayExpires]);

    const handleClickFirstName = () => {
        if (displayExpires) {
            if (validitySeconds === 0) {
                if (validitySeconds.length === 1) {
                    setMinuteZero(true);
                } else {
                    setMinuteZero(false);
                }
                setValiditySeconds(59)
                setValidityMinutes(validityMinutes - 1);
            }
        }
    };
    return <>
        {checkEmailModal &&
            <Grid container
                className={classes.mainContainer}
            >
                <Grid container
                    spacing={2}
                    justifyContent='center'
                    className={classes.dialogText}
                >
                    <Grid item xs={12}>
                        <Typography align='center'>
                            {verifyMsg}
                        </Typography>
                    </Grid>
                    {displayExpires &&
                        <Grid item xs={12}>
                            <Typography align='center' color='secondary'>
                                {`Expira en ${minuteZero ? 0 : ''}${validityMinutes}:${secondZero ? 0 : ''}${validitySeconds}`}
                            </Typography>
                        </Grid>
                    }
                    {verifyMsg === 'Validando...' &&
                        <Grid item xs={12}>
                            <CircularProgress color='secondary' />
                        </Grid>
                    }
                </Grid>
                {registrySuccess ? null
                    :
                    <Grid container
                        spacing={1}
                        justifyContent='center'
                        className={classes.dialogText}
                    >
                        <Grid item>
                            <input
                                onChange={handleChange}
                                ref={inputRef_1}
                                name='verify_code_1'
                                value={verify_code_1}
                                size='small' variant='outlined'
                                className={classes.codeInputs}
                            />
                        </Grid>
                        <Grid item>
                            <input
                                readOnly={readInput_2}
                                onChange={handleChange}
                                ref={inputRef_2}
                                name='verify_code_2'
                                value={verify_code_2}
                                size='small'
                                variant='outlined'
                                className={classes.codeInputs}
                            />
                        </Grid>
                        <Grid item>
                            <input
                                readOnly={readInput_3}
                                onChange={handleChange}
                                ref={inputRef_3} name='verify_code_3'
                                value={verify_code_3} size='small'
                                variant='outlined'
                                className={classes.codeInputs}
                            />
                        </Grid>
                        <Grid item>
                            <input
                                readOnly={readInput_4}
                                onChange={handleChange}
                                ref={inputRef_4} name='verify_code_4'
                                value={verify_code_4}
                                size='small'
                                variant='outlined'
                                className={classes.codeInputs}
                            />
                        </Grid>
                        <Grid item>
                            <input
                                readOnly={readInput_5}
                                onChange={handleChange}
                                ref={inputRef_5}
                                name='verify_code_5'
                                value={verify_code_5}
                                size='small'
                                variant='outlined'
                                className={classes.codeInputs}
                            />
                        </Grid>
                        <Grid item>
                            <input
                                readOnly={readInput_6}
                                onChange={handleChange}
                                ref={inputRef_6}
                                name='verify_code_6'
                                value={verify_code_6}
                                size='small' variant='outlined'
                                className={classes.codeInputs}
                            />
                        </Grid>
                    </Grid>
                }
                <Grid container
                    spacing={2}
                    justifyContent='center'
                    className={classes.sendButtonContainer}
                >
                    <Grid item xs={5}>
                        {registrySuccess ?
                            <Button
                                disabled={sendButton}
                                className={classes.resendButton}
                                fullWidth
                                variant='contained'
                                color='secondary'
                                onClick={handleNextStep}
                            >
                                Aceptar
                            </Button>
                            :
                            <Button
                                disabled={sendButton}
                                className={classes.resendButton}
                                fullWidth variant='contained'
                                color='secondary'
                                onClick={() => setSubmitCode(true)}
                            >
                                Enviar
                            </Button>
                        }
                    </Grid>
                </Grid>
                {registrySuccess ? null :
                    <Grid container
                        spacing={2}
                        justifyContent='center'
                        className={classes.dialogText}
                    >
                        <Grid item xs={10}>
                            <Typography align='center'>
                                ¿No ha recibido el código?
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {waitTime && <Typography color='secondary'>{time}</Typography>}
                            <Button fullWidth disabled={waitTime} color='secondary' onClick={checkGenCode}>
                                Reenviar código
                            </Button>
                        </Grid>
                    </Grid>
                }
            </Grid>
        }
    </>;
}

