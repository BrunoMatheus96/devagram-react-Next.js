import avatar from "../../public/images/avatar.svg";
export default function Avatar({ src }) {
  
  const getAvatar = () => {
    if (src && src !== "undefined") {
      return src;
    }
    return avatar.src;
  };

  return (
    <>
      <img src={getAvatar()} alt="Avatar" className="avatar" />
    </>
  );
} 