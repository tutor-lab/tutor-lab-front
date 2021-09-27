
import React, {useState, useEffect, useReducer} from 'react';
import {Container, Row, Col, Label, InputGroup, Input} from 'reactstrap';
import {BsChevronLeft} from 'react-icons/bs';
import {CgMathPlus} from 'react-icons/cg';
import styles from "../styles/signup2.module.scss";
import Router from 'next/router';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRouter, withRouter } from 'next/router';
//import { Scrollbars } from 'react-custom-scrollbars';

const ageOptions = [
    {value: '', text: '나이'},
    {value: 10, text: '10'},
    {value: 20, text: '20'},
    {value: 30, text: '30'}
]

const sexOptions = [
    {value: '', text: '성별'},
    {value: 'F', text: '여성'},
    {value: 'M', text: '남성'}
]

const addressOptions = [
    {value: '', text: '주소'},
    {value: '서울', text: '서울'},
    {value: '인천', text: '인천'},
    {value: '경기', text: '경기'}
]

const SignUp2 = () => {
    const router = useRouter();
    useEffect(() => {
        console.log(`name props=${router.query.name}`);
    }, [router]);

    const [ age, setAge ] = useState();
    const [ sex, setSex ] = useState();
    const [ address, setAddress]  = useState();

    const [ highestLvl, setHighestLvl ] = useState();
    const [ school, setSchool ] = useState();
    const [ major, setMajor ] = useState();

    const [ certificateList, setCertificateList ] = useState([{value: undefined}]);
    const [ careerList, setCareerList ] = useState([{value: undefined}]);

    useEffect(() => {
        console.log(`certificateList=${certificateList}`)
    }, [certificateList]);

    useEffect(() => {
        console.log(`careerList=${careerList}`)
    }, [careerList]);

    const addCareer = () => {
        setCareerList(careerList.concat([{value: undefined}]));
    }

    const addCertificate = () => {
        setCertificateList(certificateList.concat([{value: undefined}]));
    }

    const setCertificateValue = (e) => {
        const { id, value } = e.target;
        console.log(`id=${id} / value=${value}`)
        let copyList = [...certificateList];
        copyList[Number(id.split('-')[1])].value = value;

        setCertificateList(copyList);
    }

    const setCareerValue = (e) => {
        const { id, value } = e.target;
        console.log(`id=${id} / value=${value}`)
        let copyList = [...careerList];
        copyList[Number(id.split('-')[1])].value = value;
        console.log(copyList[Number(id.split('-')[1])].value);

        setCareerList(copyList);
    }

    const subtractCertificate = (e) => {

        const index = Number(e.target.id.split('-')[1]);
        setCertificateList(certificateList.filter((e, i) => i !== index));
    }

    const subtractCareer = (e) => {
        const index = Number(e.target.id.split('-')[1]);
        setCareerList(careerList.filter((e, i) => i !== index));
    }

    let count = 0;
    //Warning: Each child in a list should have a unique "key" prop. 계속 뜨는데 어디에 더 key를 줘야 될지 모르게뜸...
    return(
        <div className={styles.box}>
            <Container fluid>
                <Row className={styles.header}>
                    <Col xs={1}>
                        <BsChevronLeft className='float-left' onClick={() => {Router.push('/signup')}}/>
                    </Col>
                    <Col xs={11}>
                        <Label for='form' className='mt-1'>회원 가입(2/2)</Label>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <PerfectScrollbar className={styles.scrollbar}>
                            <Row className={styles.label_wrapper}>
                                <Col  xs='12' sm='12' md ='4' className={styles.label}>
                                    <Label for='basic-info'><b>{router.query.name}</b> 튜터님의 기본 정보를 입력해주세요.</Label>
                                </Col>
                            </Row>
                            <Row className='mb-2'>
                                <Col xs='12' sm='12' md ='4' className={styles.halfgroup}>
                                    <InputGroup className={styles.input_group}>
                                        <select name='age'>
                                            {ageOptions.map((e, i) => {
                                                if(e.value==='') {
                                                    return <option key={`age-${i}`} value={e.value} defaultChecked>{e.text}</option>
                                                } else return <option key={i} value={e.value}>{e.text}</option>
                                            })}
                                        </select>
                                        <div className={styles.space}></div>
                                        <select name='sex'>
                                            {sexOptions.map((e, i) => {
                                                if(e.value==='') {
                                                    return <option key={`sex-${i}`} value={e.value} defaultChecked>{e.text}</option>
                                                } else return <option key={i} value={e.value}>{e.text}</option>
                                            })}
                                        </select>
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row className='mb-4'>
                                <Col xs='12' sm='12' md ='4' className={styles.formgroup}>
                                    <select name='address'>
                                        {addressOptions.map((e, i) => {
                                            if(e.value==='') {
                                                return <option key={`address-${i}`} value={e.value} defaultChecked>{e.text}</option>
                                            } else return <option key={`address-${i}`} value={e.value}>{e.text}</option>
                                        })}
                                    </select>
                                </Col>
                            </Row>
                            <Row className={styles.label_wrapper}>
                                <Col  xs='12' sm='12' md ='4' className={styles.label}>
                                    <Label for='education'>학력을 입력해주세요.</Label>
                                </Col>
                            </Row>
                            <Row className='mt-1 mb-4'>
                                <Col xs='12' sm='12' md ='4' className={styles.formgroup}>
                                    <input type='text' id='id' name='id' placeholder='최종 학력'/>
                                    <div className='mt-2'/>
                                    <input type='text' id='school' name='school' placeholder='학교'/>
                                    <div className='mt-2'/>
                                    <input type='text' id='major' name='major' placeholder='전공'/>
                                </Col>
                            </Row>
                            <Row className={styles.label_wrapper}>
                                <Col  xs='12' sm='12' md ='4' className={styles.label}>
                                    <Label for='career'>자격증/교육 경력을 입력해주세요. (선택)</Label>
                                </Col>
                            </Row>
                            <Row className='mt-1 mb-4'>
                                <Col xs='12' sm='12' md ='4' className={styles.formgroup}>
                                    {certificateList.length > 0 && certificateList.map((e, i) => {
                                        if(i == certificateList.length - 1) {
                                            return (
                                            <>
                                                <form key={`form1-${i}`} className={styles.inputwrapper}>
                                                    <input 
                                                        key={`certificate-${i}`} 
                                                        type='text' 
                                                        id={`certificate-${i}`} 
                                                        placeholder='자격증' 
                                                        value={e.value}
                                                        onChange={(e) => {setCertificateValue(e)}}/>
                                                    <div className={styles.plus} onClick={() => {addCertificate()}}> + </div>
                                                </form>
                                                <div key={count++} className='mt-2'/>
                                            </>
                                            );
                                        } else {
                                            return (
                                            <>
                                                <form key={`form1-${i}`}  className={styles.inputwrapper}>
                                                    <input 
                                                        key={`certificate-${i}`} 
                                                        type='text' 
                                                        id={`certificate-${i}`} 
                                                        placeholder='자격증' 
                                                        value={e.value}
                                                        onChange={(e) => {setCertificateValue(e)}}
                                                        />
                                                    <div id={`div1-${i}`}  className={styles.minus} onClick={(e) => {subtractCertificate(e)}}> - </div>
                                                </form>
                                                <div key={count++} className='mt-2'/>
                                            </>
                                            );
                                        }
                                    })}
                                    <div className='mt-2'/>
                                    {careerList.length > 0 && careerList.map((e,i) => {
                                        if(i == careerList.length - 1) {
                                            return (
                                            <>
                                                <form key={`form2-${i}`} className={styles.inputwrapper}>
                                                    <input 
                                                        key={`career-${i}`} 
                                                        type='text' 
                                                        id={`career-${i}`} 
                                                        name='career' 
                                                        placeholder='경력/기간' 
                                                        value={e.value}
                                                        onChange={(e) => {setCareerValue(e)}}
                                                        />
                                                    <div className={styles.plus} onClick={() => {addCareer()}}> + </div>
                                                </form> 
                                                <div key={count++} className='mt-2'/>
                                            </>
                                            )
                                        } else {
                                            return (
                                            <>
                                                <form key={`form2-${i}`} className={styles.inputwrapper}>
                                                    <input 
                                                        key={`career-${i}`} 
                                                        type='text' 
                                                        id={`career-${i}`} 
                                                        name='career' 
                                                        placeholder='경력/기간' 
                                                        value={e.value}
                                                        onChange={(e) => {setCareerValue(e)}}
                                                        />
                                                    <div id={`div2-${i}`} className={styles.minus} onClick={(e) => {subtractCareer(e)}}> - </div>
                                                </form>
                                                <div key={count++} className='mt-2'/>
                                            </>
                                            );
                                        }
                                    })}
                                </Col>
                            </Row>
                            <Row className={styles.label_wrapper}>
                                <Col  xs='12' sm='12' md ='4' className={styles.label}>
                                    <Label for='additional-info'>추가 입력 사항 (선택)</Label>
                                </Col>
                            </Row>
                            <Row className='mt-1 mb-4'>
                                <Col xs='12' sm='12' md ='4' className={styles.formgroup}>
                                    <input type='text' id='graduate-school' name='graduate-school' placeholder='대학원'/>
                                    <div className='mt-2'/>
                                    <input type='text' id='graduate-major' name='graduate-major' placeholder='대학원 전공'/>
                                </Col>
                            </Row>
                            <Row className={styles.label_wrapper}>
                                <Col  xs='12' sm='12' md ='4' className={styles.label}>
                                    <Label for='basic-info'>입력한 내용을 인증할 수 있는 첨부파일을 업로드 해주세요.</Label>
                                </Col>
                             {/* 여긴 아직 작업하지 말라고 함ㅎㅅㅎ */}
                            </Row>
                        </PerfectScrollbar>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className={styles.form}>
                        <div className={styles.button} onClick={() => {alert('click')}}>완료</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default SignUp2;