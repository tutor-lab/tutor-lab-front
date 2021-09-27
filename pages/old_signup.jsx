import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Label, Input, InputGroup, Button} from 'reactstrap';
import styles from "../styles/signup.module.scss";
import {BsChevronLeft} from 'react-icons/bs';
import {isLength, isAlphanumeric, isEmail} from 'validator';
import Router from 'next/router';

const SignUp = () => {
    const [name, setName] = useState();
    const [id, setId] = useState();
    const [isValidated, setIsValidated] = useState(false);
    const [pw, setPw] = useState();
    const [pwCheck, setPwCheck] = useState(false);
    const [phone, setPhone] = useState();
    const [phoneCheck, setPhoneCheck] = useState(false);

    const setIdState = (event) => {
        document.getElementById('id').style.color = "#212529";
        setId(event.target.value);
        console.log(id);
    }

    const setPwState = (event) => {
        document.getElementById('pwValidation').textContent = '';
        let pwValue = event.target.value;
        if(isLength(pwValue , {min:6, max: 14}) ) setPw(pwValue);
        else {
            document.getElementById('pwValidation').textContent = '비밀번호를 6~14자 이내로 입력해주세요.';
            document.getElementById('pwValidation').style.color = "#db0d36";
        }
    }

    const checkDuplicatedId = () => {
        console.log(id);
        
        if(!isEmail(id)) {
            document.getElementById('id').value = '이메일 형식이 올바르지 않습니다.';
            document.getElementById('id').style.color = "#db0d36";
        } else {
            alert(`checkDuplicatedId : id - ${id}`); 
            setIsValidated(true); //임시로 true로 해놓음
        }
    }

    const checkPwValue = (event) => {
        document.getElementById('pwCheck').textContent = '';
        if(pw !== event.target.value) {
            document.getElementById('pwCheck').textContent = '비밀번호가 동일하지 않습니다.';
            document.getElementById('pwCheck').style.color = "#db0d36";
        } else {
            setPwCheck(true);
        }
    }

    const checkPhoneNumber = (event) => {
        document.getElementById('mobileCheck').textContent = '';

        const regExp = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
        if(!regExp.test(event.target.value) || !isLength(event.target.value, 11)) {
            document.getElementById('mobileCheck').textContent = '전화번호가 유효하지 않습니다.';
            document.getElementById('mobileCheck').style.color = "#db0d36";
        } else {
            setPhone(event.target.value);
            setPhoneCheck(true);
        }
    }

    const submitAndNext = () => {
        const name = document.getElementById('name').value;
        const id = document.getElementById('id').value;
        const password = document.getElementById('password').value;

        if(name === '') alert('이름을 입력해주세요.');
        else if(id === '') alert('아이디를 입력해주세요.');
        else if(!isValidated) alert('아이디 중복 검사를 해주세요.');
        else if(password === '') alert('비밀번호를 입력해주세요.');
        else if(!pwCheck) alert('비밀번호를 확인해주세요.');
        else if(!phoneCheck) alert('전화번호를 확인해주세요.');
        else {
            Router.push({
                pathname:'/signup2',
                query: {name: name}
            });
        }
    }

    return (
        <div className={styles.box}>
            <Container fluid>
                <Row className={styles.header}>
                    <Col xs={1}>
                        <BsChevronLeft className='float-left' onClick={() => {console.log('뒤로 가기')}}/>
                    </Col>
                    <Col xs={11}>
                        <Label for='form' className='mt-1'>회원 가입(1/2)</Label>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={5} className={styles.form}>
                        <Input 
                            className={styles.input}
                            id='name'
                            type='text' 
                            placeholder='이름' 
                            onChange={(event) => {setName(event.target.value)}}
                        />
                        
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={5} className={styles.form}>
                        <InputGroup className={styles.idField}>
                            <Input
                                className={styles.idInput}
                                id='id'
                                type='text' 
                                placeholder='ID(Email)'
                                onClick={() => {document.getElementById('id').value = ''}}
                                onChange={(event) => {setIdState(event)}}/>
                            <Button outline onClick={() => {checkDuplicatedId()}}>중복 확인</Button>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={5} className={styles.form}>
                        <Input 
                            className={styles.input}
                            id='password'
                            type='password' 
                            placeholder='비밀번호 입력(6~14자)' 
                            maxLength={14}
                            onChange={(event) => {setPwState(event)}}
                        />
                    </Col>
                </Row>
                <div id='pwValidation'></div>
                <Row>
                    <Col xs={12} sm={6} md={5} className={styles.form}>
                        <Input 
                            className={styles.input}
                            id='passwordCheck'
                            type='password' 
                            placeholder='비밀번호 재입력'
                            maxLength={14}
                            onChange={(event) => {checkPwValue(event)}}
                        />
                    </Col>
                </Row>
                <div id='pwCheck'></div>
                <Row>
                    <Col xs={12} sm={6} md={5} className={styles.form}>
                        <Input 
                            className={styles.input}
                            id='phone'
                            type='text' 
                            placeholder="휴대폰 번호('-'제외)"
                            maxLength={11}
                            onChange={(event) => {checkPhoneNumber(event)}}
                        />
                    </Col>
                </Row>
                <div id='mobileCheck'></div>
                <Row>
                    <Col xs={12} className={styles.form}>
                        <div className={styles.button} onClick={() => {submitAndNext()}}>다음</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SignUp;