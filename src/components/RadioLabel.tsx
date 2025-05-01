import { motion } from "motion/react";

export type RadioLabelProps = {
  htmlFor: string;
  content: string;
};

/**
 * A styled radio button label component with animation effects
 * @param props The component props
 * @returns A motion.label element with hover and tap animations
 */
export function RadioLabel({ htmlFor, content }: RadioLabelProps) {
  return (
    <motion.label
      htmlFor={htmlFor}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="opacity-75 hover:opacity-100 block items-center justify-between p-5 text-gray-500 border border-gray-500 rounded-3xl cursor-pointer text-center peer-checked:border-gray-600 peer-checked:text-white peer-checked:bg-gray-600 peer-checked:opacity-100"
    >
      {content}
    </motion.label>
  );
}