import React from 'react'
export default function Saldo() {
    return (
        <div className='pt-5'>
            <h1>Saldo</h1>
            <div className='table-responsive'>
                <form>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Agregar</th>
                            </tr>
                            <tr>
                                <th>
                                    <input
                                        required
                                        type="number"
                                        min='0'
                                    />
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <button type='button' className='btn btn-success'>Add</button>
                                </th>
                            </tr>
                        </thead>
                    </table>
                </form>
            </div>

        </div>
    )
}