import style from "./discount.module.scss";

const Discount = ({
  originPrice,
  discount,
  finalPrice,
  notes, //특이사항 (ex) 쿠폰 적용시 5개월 할부
}) => {
  return (
    <section className={style.dcSection}>
      {discount ? (
        <>
          <span className={style.notes}>{notes}</span>
          <div className={style.dc}>
            <strong className={style.discount}>{discount + "%"}</strong>
            <strong className={style.finalPrice}>
              {/* {finalPrice.toLocaleString("ko-KR") + "원"} */}
            </strong>
            <span className={style.originPrice}>
              {/* {originPrice.toLocaleString("ko-KR") + "원"} */}
            </span>
          </div>
        </>
      ) : (
        <strong className={style.finalPrice}>
          {/* {finalPrice.toLocaleString("ko-KR") + "원"} */}
        </strong>
      )}
    </section>
  );
};
export default Discount;
