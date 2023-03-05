export const textProps = {
  modelValue: {
    required: true,
    type: String,
  },
  id: {
    default: "",
    type: String,
  }
}

export const checkProps = {
  modelValue: {
    required: true,
    type: [Boolean, Array],
  },
  value: {
    default: "",
    type: [String, Boolean],
  },
  id: {
    default: "",
    type: String,
  }
}