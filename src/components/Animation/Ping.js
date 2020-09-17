import * as React from 'react'
import * as PropTypes from 'prop-types'
import clsx from 'clsx'

const PING_POSITION = {
    topRight: 'top-0 right-0 -mt-1 -mr-1',
    bottomRight: 'bottom-0 right-0 -mb-1 -mr-1',
    topLeft: 'top-0 left-0 -mt-1 -ml-1',
    bottomLeft: 'bottom-0 left-0 -mb-1 -ml-1',
}

const PING_ANIMATION_COLOR = {
    gray: 'bg-gray-400',
    red: 'bg-red-400',
    orange: 'bg-orange-400',
    yellow: 'bg-yellow-400',
    green: 'bg-green-400',
    teal: 'bg-teal-400',
    blue: 'bg-blue-400',
    indigo: 'bg-indigo-400',
    purple: 'bg-purple-400',
    pink: 'bg-pink-400',
}

const PING_COLOR = {
    gray: 'bg-gray-500',
    red: 'bg-red-500',
    orange: 'bg-orange-500',
    yellow: 'bg-yellow-500',
    green: 'bg-green-500',
    teal: 'bg-teal-500',
    blue: 'bg-blue-500',
    indigo: 'bg-indigo-500',
    purple: 'bg-purple-500',
    pink: 'bg-pink-500',
}

// For Absolute positioning need to make parent element relative
function Ping({ position = 'topRight', color = 'pink', className }) {
    const classNames = clsx(
        'flex absolute h-3 w-3',
        PING_POSITION[position],
        className
    )
    return (
        <span className={classNames}>
            <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${PING_ANIMATION_COLOR[color]}`}
            ></span>
            <span
                className={`relative inline-flex rounded-full h-3 w-3 ${PING_COLOR[color]}`}
            ></span>
        </span>
    )
}

Ping.propTypes = {
    position: PropTypes.oneOf(Object.keys(PING_POSITION)).isRequired,
    color: PropTypes.oneOf(Object.keys(PING_COLOR)),
}

export { Ping }
