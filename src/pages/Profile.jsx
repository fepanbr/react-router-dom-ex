export default function Profile(props) {
  const {match: {params: { id }}} = props;
  console.log(id, typeof id);
  return <div>Profile 페이지 입니다. {id}</div>
}