import { motion } from "framer-motion";

const Chip = ({ text, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${selected
        ? "text-white"
        : "text-[#066AC9] hover:text-white hover:bg-[#066AC9]"
        } text-sm transition-colors rounded-md relative py-3 px-6`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.8 }}
          className="absolute inset-0 z-0 bg-[#066AC9] rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

export default Chip;
