import MemberList from "../MemberList/MemberList"
import Weather from "../Weather/Weather";
import SvgTestbed from "../SvgTestbed/SvgTestbed"

export default function Dashboard() {
  return (
    <>
      <h2></h2>
      <Weather />
      <MemberList />
      {/* <SvgTestbed /> */}
    </>
  );
}
