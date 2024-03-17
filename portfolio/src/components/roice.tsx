interface RoiceTextInterface{
    className?: string;
}

function RoiceText({className}: RoiceTextInterface) {
  return <h1 className={`text-4xl font-bold ${className}`}>roice</h1>;
}

export default RoiceText;
