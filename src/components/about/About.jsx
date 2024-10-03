import {Button} from "antd";

export default function About() {


    return (
        <div>
            <h3 className={'flex justify-center text-xl font-bold'}> About</h3>
            <p className={'my-3 font-semibold '}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                blanditiis deserunt dicta doloremque
                doloribus ducimus ea esse eum illo impedit ipsa, iure maxime molestiae necessitatibus non numquam
                obcaecati, odit officiis pariatur quasi quo repellat reprehenderit similique! Deleniti, deserunt
                dignissimos ducimus impedit, in libero modi nostrum odio pariatur quo quod sequi similique vitae. Ad
                architecto aspernatur cum deleniti dicta dolorum, eveniet ex expedita explicabo facilis fuga illo
                impedit ipsum, labore minima mollitia neque nihil possimus praesentium recusandae reiciendis repellendus
                sequi sit temporibus, tenetur ut voluptas voluptatum? Aliquam, asperiores, atque consectetur cum
                doloribus ea esse et eum ex exercitationem expedita fugit harum maiores mollitia officiis pariatur quos
                tempora vero. Adipisci cupiditate dolorum enim eos facere, iure iusto magnam modi quidem rem sed ullam
                veniam. Accusamus accusantium architecto culpa, cupiditate, dolorem exercitationem harum impedit
                incidunt, ipsum itaque non porro quaerat similique voluptate voluptatibus? Ab accusamus atque beatae
                blanditiis cum dolorem ducimus enim eos facilis harum ipsam modi molestias mollitia non, odit, possimus
                recusandae, reprehenderit rerum sequi soluta tenetur veniam voluptate! A accusamus asperiores, corporis
                cum debitis deleniti, dignissimos eaque et expedita explicabo fuga ipsam libero magni maxime natus nisi
                nobis odio perspiciatis placeat quaerat quidem quod repellat rerum tenetur veritatis vero voluptatum?
                Aut!</p>
            <div className={'flex justify-end px-10 mt-4 '}>
                <Button className={''}>
                    Ok
                </Button>
            </div>

            <div className={'mt-3'}>
                <img src="https://miro.medium.com/v2/resize:fit:562/1*4Tm3LoWey4PgJ-8-1KKd9g.png" alt=""/>
                <h4 className={'my-4 text-[20px] font-semibold '}>You can find all kinds of tests here</h4>
                <p className={'my-3 max-w-[800px]'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi corporis cum eligendi expedita
                    illum nisi praesentium reiciendis repellat voluptates! Architecto autem, eligendi numquam obcaecati
                    optio qui reiciendis sit voluptates?</p>
            </div>
        </div>
    )
}