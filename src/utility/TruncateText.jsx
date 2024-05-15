/* eslint-disable react/prop-types */


const TruncateText = ({ text }) => {
  if (text.length > 100) {
    const truncatedText = text.substring(0, 100) + '...';
    return <span>{truncatedText}</span>;
  } else {
    
    return <span>{text}</span>;
  }
};

export default TruncateText;
