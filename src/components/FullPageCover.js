import * as React from 'react'

function FullPageCover({ children }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white text-orange">
            {children}
        </div>
    )
}

export { FullPageCover }
