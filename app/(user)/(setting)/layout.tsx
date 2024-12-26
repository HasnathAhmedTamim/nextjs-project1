import React from 'react'

const SettingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div>
                <h3 className='text-gray-600'>This is setting page layout</h3>
            </div>
            {children}
        </div>
    )
}

export default SettingLayout
