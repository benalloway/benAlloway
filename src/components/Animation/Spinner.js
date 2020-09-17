import * as React from 'react'
import * as PropTypes from 'prop-types'
import clsx from 'clsx'

import { FullPageCover } from '../FullPageCover'

const SPINNER_SIZES = {
    sm: 'h-5 w-5',
    lg: 'h-15 w-15',
}

const SPINNER_COLORS = {
    white: 'text-white-700',
    gray: 'text-gray-700',
    red: 'text-red-700',
    orange: 'text-orange-700',
    yellow: 'text-yellow-700',
    green: 'text-green-700',
    teal: 'text-teal-700',
    blue: 'text-blue-700',
    indigo: 'text-indigo-700',
    purple: 'text-purple-700',
    pink: 'text-pink-700',
}

function FullPageSpinner({ size = 'sm', color = 'teal' }) {
    return (
        <FullPageCover>
            <Spinner size={size} color={color} />
        </FullPageCover>
    )
}

function Spinner({ size = 'sm', color = 'teal', className }) {
    const classNames = clsx(
        'animate-spin',
        SPINNER_SIZES[size],
        SPINNER_COLORS[color],
        className
    )
    return (
        <svg
            className={classNames}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            ></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
        </svg>
    )
}

Spinner.propTypes = {
    color: PropTypes.oneOf(Object.keys(SPINNER_COLORS)).isRequired,
    size: PropTypes.oneOf(Object.keys(SPINNER_SIZES)).isRequired,
}

Spinner.defaultProps = {
    size: 'sm',
    color: 'gray',
}

FullPageSpinner.propTypes = {
    color: PropTypes.oneOf(Object.keys(SPINNER_COLORS)).isRequired,
    size: PropTypes.oneOf(Object.keys(SPINNER_SIZES)).isRequired,
}

FullPageSpinner.defaultProps = {
    size: 'lg',
    color: 'teal',
}

export { Spinner, FullPageSpinner }
