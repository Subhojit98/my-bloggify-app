import Image from "next/image"
import RelatedBlogs from "../components/RelatedBlogs"
import quoteImage from '@/app/assets/icons/quote-svgrepo-com.svg'
const page = () => {
    return (
        <>

            <div className="bg-white grid-lauout-design  mt-10">
                <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-transparent dark:bg-gray-900  z-50">
                    <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
                        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert bg-white ">
                            <header className="mb-4 lg:mb-6 not-format">
                                <address className="flex items-center mb-6 not-italic">
                                    <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                        <img className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos" />
                                        <div>
                                            <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Jese Leos</a>
                                            <p className="text-base text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p>
                                            <p className="text-base text-gray-500 dark:text-gray-400"><time dateTime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                                        </div>
                                    </div>
                                </address>
                                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-5xl dark:text-white">Best practices for successful prototypes</h1>
                            </header>
                            <p className="leading-normal my-7">Flowbite is an open-source library of UI components built with the utility-first
                                classes from Tailwind CSS. It also includes interactive elements such as dropdowns, modals,
                                datepickers Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
                                you can think things through before committing to an actual design project.
                                But then I found a. It comes with the most commonly used UI components, such as buttons, navigation
                                bars, cards, form elements, and more which are conveniently built with the utility classes from
                                Tailwind CSS.</p>
                            <figure><img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt="" />
                                <figcaption>Digital art by Anonymous</figcaption>
                            </figure>
                            <p className="my-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis totam aperiam ducimus, dolore in voluptatibus minima maiores explicabo doloremque ea dolorem! Debitis a error perferendis earum ipsa ducimus magnam nemo cupiditate, excepturi amet. Eius adipisci inventore voluptatem voluptate assumenda architecto, voluptas possimus nihil harum reiciendis autem dolor. Saepe nemo enim, corrupti similique excepturi nam doloremque odit adipisci facilis nesciunt atque pariatur dolorum iste, distinctio ratione assumenda. Soluta, vitae aspernatur. Incidunt, dignissimos aspernatur labore culpa nesciunt ab! Impedit nostrum maxime mollitia, quia nobis accusamus qui, incidunt aspernatur, ab laboriosam repudiandae. Ex, qui sunt impedit iusto excepturi aspernatur tenetur quasi et, officiis voluptate facilis nihil dolore hic ullam vel at repellendus soluta. Laborum voluptas nemo libero necessitatibus sequi cupiditate cumque autem voluptatibus! Fugit consectetur adipisci atque non alias? Perspiciatis error quasi aperiam voluptate expedita quas necessitatibus eum facere explicabo omnis quam cumque ex neque illo adipisci sed hic temporibus soluta, incidunt exercitationem earum! Quasi laudantium nobis, corrupti quisquam debitis explicabo animi. Fugiat nesciunt laboriosam, rerum aspernatur praesentium sequi rem odio minus eaque numquam? Iusto sapiente neque totam. Velit repellat expedita cumque vero molestias tempora aliquid consequuntur placeat asperiores dignissimos iste distinctio, voluptatibus quibusdam alias maxime mollitia ea enim reprehenderit rerum aliquam tempore debitis facilis. Quas sit ad libero qui hic esse soluta tempora molestias, consectetur explicabo reiciendis necessitatibus, numquam mollitia repellendus, nulla totam. Quidem est inventore deserunt aut ab ea voluptas voluptates sit. Nam itaque fugit iure. Aspernatur harum commodi corporis ex aperiam tenetur asperiores sint perspiciatis sapiente quod provident, exercitationem, consequuntur dicta consequatur pariatur repellendus sed autem, placeat nulla quasi omnis eaque reprehenderit enim. Vitae asperiores quisquam voluptatem perferendis nulla, voluptates dolorum? Itaque fugiat modi ipsam nihil rem tempore quaerat dolorum, repudiandae deleniti aliquid veritatis doloremque nostrum quasi, hic soluta odit temporibus. Pariatur ducimus est quasi, omnis distinctio architecto nostrum sequi.</p>
                        </article>
                    </div>
                </main>

                <div className="flex justify-center mx-3">

                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>

                    <p className="w-full mt-5 sm:mx-1 md:mx-3 text-center text-xl sm:text-2xl md:w-[80%] lg:text-3xl xl:w-[40%] font-bold my-10">
                        Increase your knowledge by reading new things and I will share whatever I know for you, as long as I enjoy it.
                    </p>

                </div>

            </div>
            <RelatedBlogs />

        </>
    )
}

export default page