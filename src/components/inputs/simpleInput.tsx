import React, { useRef, useState } from "react"
import OutlinedInput from "@mui/material/TextField"
import {
  Collapse,
  IconButton,
  Stack,
  SxProps,
  Theme,
  Typography,
} from "@mui/material"
import theme, { colors } from "src/theme"
import { Box } from "@mui/system"

interface SimpleInputProps {
  label?: string
  placeholder?: string
  className?: string
  multiline?: boolean

  onSubmit?(): void

  onChange?(text: string): void

  value?: string
  error?: string
  width?:
    | string
    | {
        xs?: string
        sm?: string
        lg?: string
        md?: string
      }
  height?: string
  type?: "number" | "string"

  onBlur?(): void

  onFocus?(): void

  focus?: boolean
  disabled?: boolean
  inputType?: string
  id?: string
  noclear?: boolean
  errorSx?: SxProps
}

const styles: { [key: string]: SxProps } = {
  root: {
    "& .MuiInputBase-root.Mui-disabled": {
      "& > fieldset": {
        borderColor: colors.gray2,
      },
    },
    "& .MuiOutlinedInput-root": {
      backgroundColor: "primary.contrastText",
      "& fieldset": {
        borderColor: colors.gray2,
        borderRadius: "2px",
      },
      "&:hover fieldset": {
        borderColor: colors.gray2,
      },
      "& input::placeholder": {
        color: colors.gray3,
        opacity: 1,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.info.main,
        borderWidth: "1px",
      },
    },
  },
  rootError: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.error.main,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.error.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.error.main,
        borderWidth: "1px",
      },
    },
  },
  label: {
    fontWeight: 400,
    fontSize: "15px",
    paddingBottom: "10px",
    lineHeight: "15px",
  },
  typographyError: {
    marginTop: "6px",

    color: theme.palette.error.main,
    fontSize: "10px",
    lineHeight: "13px",
    flexWrap: "nowrap",
    width: "200px",
    position: "absolute",
    bottom: "-15px",
  },
}

const SimpleInput = (props: SimpleInputProps) => {
  const {
    id,
    label,
    placeholder,
    className,
    multiline,
    onSubmit,
    onChange,
    value,
    error,
    width,
    height,
    type,
    onBlur,
    onFocus,
    focus,
    disabled,
    inputType,
    noclear,
    errorSx,
  } = props

  const [active, setActive] = useState(false)
  const [ini, setIni] = useState(false)
  const inputRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <Stack
        onClick={(event) => {
          event.stopPropagation()
        }}
        position={"relative"}
        flexWrap="nowrap"
        data-matomo-mask
      >
        <Stack className={className} width={width}>
          {!!label && (
            <Typography
              id={`${id}-typo-label`}
              variant="inherit"
              sx={styles.label}
            >
              {label}
            </Typography>
          )}
          <OutlinedInput
            id={id}
            autoFocus={focus}
            inputRef={inputRef}
            disabled={disabled}
            onFocus={(event) => {
              event.stopPropagation()
              setActive(true)
              if (onFocus) {
                onFocus()
              }
            }}
            onBlur={(event) => {
              event.stopPropagation()
              setActive(false)
              if (onBlur) {
                onBlur()
              }
            }}
            type={inputType || "text"}
            value={value}
            sx={ini && !!error ? styles.rootError : styles.root}
            multiline={multiline}
            onKeyDown={(e) => {
              if (onSubmit) {
                if (e.code === "Enter") {
                  onSubmit()
                  inputRef?.current?.blur()
                }
              }
            }}
            onChange={(e) => {
              if (!ini) setIni(true)
              if (onChange) {
                if (type === "number") {
                  if (!e.target.value) {
                    onChange(e.target.value)
                  }
                  const val = Number(e.target.value)
                  const isNum = isFinite(val)
                  if (isNum) {
                    onChange(e.target.value)
                  }
                } else {
                  onChange(e.target.value)
                }
              }
            }}
            inputProps={{
              style: {
                fontSize: "14px",
                padding: !multiline ? "9px 12px" : undefined,
                height: multiline ? height || 107 : undefined,
                lineHeight: "15px",
                color: colors.black,
                backgroundColor: theme.palette.primary.contrastText,
              },
            }}
            placeholder={!active ? placeholder : undefined}
          />
        </Stack>
      </Stack>
      <Collapse in={!!error}>
        <Box sx={errorSx}>
          <Typography variant="caption" color="error">
            {error}
          </Typography>
        </Box>
      </Collapse>
    </>
  )
}
export default SimpleInput
