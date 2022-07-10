import React from 'react'
import { getProviders, signIn as SignIntoProvider, useSession, callbackUrl } from 'next-auth/react'
import Header from '../../components/Header';

function signIn({ providers }) {
    const session = useSession();
    console.log(session);
    console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET)
    return (
        <>
            <Header />
            <div className='flex flex-col 
            items-center justify-center min-h-screen
             py-2 px-14 text-center'>
                <img className='w-80' src='https://links.papareact.com/ocw' alt='' />
                <p className='fonr-xs italic'>This is Instagram 2.0</p>
                <div className='mt-36'>
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            {console.log(provider.id)}
                            <button className='p-3 bg-blue-500 -mt-56 rounded-lg text-white' 
                            onClick={() => SignIntoProvider(provider.id, {callbackUrl:'/'})}>
                                Sign in with {provider.name}
                            </button>

                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signIn;