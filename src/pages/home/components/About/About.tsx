export function About() {
	return (
		<section className="bg-white py-8 md:py-16 lg:py-24">
			<div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
				<div className="flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-16">
					<div className="flex flex-col gap-6 md:gap-8 flex-1">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
							Sobre
						</h2>
						<p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-prose">
							O Laboratório de Transformação Digital (LTD) é um projeto
							institucional da Estácio que tem como objetivo promover um
							ambiente de inovação, pesquisa aplicada e desenvolvimento
							tecnológico entre os cursos da área de tecnologia.
						</p>

						<div className="relative w-full aspect-[4/5] mt-4 md:mt-6 shadow-lg rounded-lg overflow-hidden">
							<img
								src="ofice-shablau.jpg"
								alt="Ambiente colaborativo no escritório do LTD"
								className="h-full w-full object-cover"
								loading="lazy"
							/>
						</div>
					</div>

					<div className="flex flex-col gap-6 md:gap-8 flex-1 mt-8 lg:mt-0">
						<div className="relative w-full aspect-[5/4] shadow-lg rounded-lg overflow-hidden order-2 lg:order-1">
							<img
								src="ofice-shablau-2.jpg"
								alt="Equipe do LTD colaborando em projetos"
								className="h-full w-full object-cover"
								loading="lazy"
							/>
						</div>

						<p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-prose order-1 lg:order-2 mt-0 lg:mt-6">
							O LTD funciona como um espaço colaborativo onde ideias se
							transformam em soluções. Por meio de projetos multidisciplinares,
							o laboratório estimula a prática, a experimentação e a troca de
							conhecimentos entre estudantes, professores e parceiros externos.
						</p>

						<p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-prose order-3">
							A proposta do laboratório é aproximar o ambiente acadêmico das
							demandas do mundo real, incentivando a criação de soluções
							digitais com impacto social, educacional ou mercadológico. O
							projeto também atua como um núcleo de apoio para iniciativas
							acadêmicas que envolvam tecnologia e transformação digital.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
