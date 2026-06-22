export default function Featured() {
  const questions = [
    "На какую дату вы планируете экскурсию?",
    "В какое время вам было бы удобно начать программу?",
    "Есть ли ограничения по времени окончания, или мы можем предложить экскурсию любой продолжительности?",
    "Есть ли у вас ориентировочный бюджет на одного человека или общий лимит на группу? Это поможет нам предложить вам программы, которые точно соответствуют вашим финансовым ожиданиям.",
    "Потребуется ли вам заказ автобуса / микроавтобуса, или вы планируете передвигаться самостоятельно?",
    "Если транспорт нужен, укажите, пожалуйста, адрес подачи и конечную остановку.",
    "Будет ли необходимо организовать питание в рамках программы?",
    "Есть ли особые пожелания по формату экскурсии, которые мы должны учесть?",
    "Предпочитаемая форма оплаты: наличная/безналичная? Есть ли среди участников льготные категории (сироты, инвалиды, многодетные), которые могут дать право на бесплатный или льготный вход в музеи?",
  ];

  const contractPoints = [
    {
      num: "1.5.1",
      text: "Направить Исполнителю заказ на экскурсионное обслуживание в свободной форме по электронной почте, указанной в договоре, не позднее, чем за (дата за день до экскурсии)",
    },
    {
      num: "1.5.3",
      text: "Заказчик имеет право изменить ранее направленный заказ Исполнителю, или аннулировать его, направив соответствующее уведомление об изменении или аннулировании не позднее, чем до (дата за день до экскурсии)",
    },
    {
      num: "2.2.5",
      text: "Исполнитель обязуется информировать Заказчика обо всех изменениях цен и условий оказания услуг по e-mail или другим доступным способом связи. В случае если Заказчик не сообщит в течение 7 дней о принятии таких изменений от Исполнителя, Заявки, принятые от Заказчика до получения им информации о таких изменениях, обслуживаются Исполнителем по новой цене и на новых условиях оказания услуг.",
    },
    {
      num: "3.2.4",
      text: "Исполнитель по итогу оказания услуг в рамках настоящего договора направляет Заказчику Акт выполненных работ за истекший период. Все претензии по оказанию услуг принимаются в течение 5-ти дней от даты окончания оказания услуг.",
    },
    {
      num: "3.2.1",
      text: "Полная оплата Заказчиком услуг по каждой конкретной Заявке в рамках настоящего договора должна быть произведена в срок не менее чем за сутки до начала оказания услуг (исключая праздники и выходные).",
    },
    {
      num: "3.2.2",
      text: "Заказчик производит предварительную оплату услуг в размере 10%, в срок до 25 июля (если экскурсия раньше 25 июля 2026 г., дата меняется на более раннюю)",
    },
    {
      num: "5.1",
      text: "Стороны обязаны уведомлять друг друга о возникновении обстоятельств непреодолимой силы не позднее 3 (трех) рабочих дней с того момента, когда информирующая сторона узнала об их возникновении.",
    },
    {
      num: "6.5",
      text: "Арбитражный суд г. [город заказчика]",
    },
  ];

  const docPackage = [
    "Договор № Д-15-07-2026/01 на экскурсионное обслуживание — подписан с нашей стороны, просим подписать с вашей.",
    "Приложение № 1. Заявка",
    "Приложение № 2. Спецификация",
    "Приложение № 3. Программа экскурсии",
    "Приложение № 4. Согласия на обработку персональных данных",
    "Приложение № 5. Список для водителя (ТОЛЬКО ЕСЛИ АВТОБУС НУЖЕН)",
    "Информационный лист заказчика",
  ];

  return (
    <div className="bg-white text-neutral-900">

      {/* Модуль 1 Header */}
      <div className="bg-neutral-900 text-white px-6 py-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">МОДУЛЬ 1</h2>
      </div>

      {/* Первичное письмо */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-2 uppercase tracking-wide">Первичное письмо</h2>
        <div className="w-16 h-1 bg-neutral-900 mb-8" />
        <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 md:p-10 text-neutral-800 leading-relaxed">
          <p className="mb-4">Здравствуйте, <span className="italic text-neutral-500">(имя, отчество)</span>!</p>
          <p className="mb-4">
            Большое спасибо за ваш запрос, направленный в нашу компанию. Нам очень приятно, что вы рассматриваете нас для организации экскурсии.
          </p>
          <p className="mb-6">
            Мы внимательно изучили ваши пожелания и с удовольствием поможем подобрать программу. Чтобы предложить вам максимально подходящие варианты, просим уточнить несколько деталей:
          </p>
          <ol className="space-y-3">
            {questions.map((q, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-bold text-neutral-400 shrink-0">{i + 1}.</span>
                <span>{q}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-5 text-sm text-amber-900">
          <strong>Примечание:</strong> После того, как нашли экскурсию, предлагаем ее заказчику (можно скинуть ссылку). После согласования начинаем заполнять договор.
        </div>
      </section>

      {/* Договор */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-2 uppercase tracking-wide">Договор</h2>
          <div className="w-16 h-1 bg-neutral-900 mb-8" />
          <div className="space-y-4">
            {contractPoints.map((p, i) => (
              <div key={i} className="flex gap-4 bg-white border border-neutral-200 rounded-lg p-5">
                <span className="font-mono text-sm font-bold text-neutral-500 shrink-0 pt-0.5">п. {p.num}</span>
                <p className="text-neutral-800 leading-relaxed text-sm md:text-base">{p.text}</p>
              </div>
            ))}
          </div>

          {/* Реквизиты */}
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4 uppercase tracking-wide">Если заказчик — юридическое лицо</h3>
              <ul className="space-y-2 text-sm text-neutral-700">
                {["Полное наименование", "ИНН", "КПП", "Юридический адрес", "Фактический адрес", "Расчётный счёт", "БИК", "Корреспондентский счёт", "Банк", "Телефон", "Email", "Руководитель"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-neutral-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4 uppercase tracking-wide">Если заказчик — физическое лицо</h3>
              <p className="text-sm text-neutral-700">Номер и серия паспорта, кем и когда выдан, прописка</p>
              <div className="mt-6">
                <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">Исполнитель</h3>
                <p className="text-sm text-neutral-700">Реквизиты исполнителя берутся с сайта организации, где берется экскурсия.</p>
              </div>
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-900">
                Если нужны какие-либо данные, пишем заказчику: <em>«Нам нужно уточнить …, это нужно для заполнения (название документа)»</em>. Всегда поясняем зачем нужны данные, ссылаясь на документ.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Письмо на согласие */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-2 uppercase tracking-wide">Письмо клиенту на заполнение согласия на обработку персональных данных</h2>
        <div className="w-16 h-1 bg-neutral-900 mb-8" />
        <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 md:p-10 text-neutral-800 leading-relaxed">
          <p className="mb-4">
            В соответствии с требованиями Федерального закона от 27.07.2006 г. № 152-ФЗ «О персональных данных», для оформления договора на экскурсионное обслуживание мы обязаны получить письменное согласие от каждого участника мероприятия на обработку его персональных данных (ФИО, дата рождения, паспортные данные и т.д.).
          </p>
          <p className="mb-4">
            Во вложении к этому письму вы найдёте бланк Согласия (Приложение № 4 к договору). Просим вас:
          </p>
          <ol className="space-y-2 mb-6">
            <li className="flex gap-3"><span className="font-bold text-neutral-400 shrink-0">1.</span>Заполнить все поля (паспортные данные, адрес регистрации, контактный телефон).</li>
            <li className="flex gap-3"><span className="font-bold text-neutral-400 shrink-0">2.</span>Поставить подпись и расшифровку (ФИО) в двух местах документа.</li>
            <li className="flex gap-3"><span className="font-bold text-neutral-400 shrink-0">3.</span>Направить нам скан по электронной почте.</li>
          </ol>
        </div>

        <div className="mt-6 bg-neutral-900 text-white rounded-lg p-6">
          <h4 className="font-bold mb-3 uppercase tracking-wide text-sm text-neutral-400">Если клиент спрашивает: «А зачем это?»</h4>
          <p className="text-sm leading-relaxed">
            Это стандартное требование для всех туристических и экскурсионных компаний. Согласие даёт нам право хранить ваши контактные и паспортные данные в целях заключения договора, бронирования билетов в музеи и для связи со страховой компанией в случае возникновения непредвиденных ситуаций. Без этих подписей мы не имеем права юридически оформлять поездку. Мы гарантируем конфиденциальность ваших данных.
          </p>
        </div>
      </section>

      {/* Финальное письмо */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-2 uppercase tracking-wide">Финальное письмо клиенту</h2>
          <div className="w-16 h-1 bg-neutral-900 mb-8" />
          <div className="bg-white border border-neutral-200 rounded-lg p-6 md:p-10 text-neutral-800 leading-relaxed">
            <p className="mb-4">
              Благодарим вас за выбор нашей компании. Мы рады, что вы остановились на экскурсии «».
            </p>
            <p className="mb-4">
              Во исполнение достигнутых договорённостей направляем вам полный пакет документов по вашему заказу.
            </p>
            <p className="mb-3 font-semibold">Состав пакета документов:</p>
            <ol className="space-y-2 mb-6">
              {docPackage.map((doc, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-bold text-neutral-400 shrink-0">{i + 1}.</span>
                  <span className={doc.includes("ТОЛЬКО") ? "font-semibold text-amber-700" : ""}>{doc}</span>
                </li>
              ))}
            </ol>
            <p className="mb-3">
              Просим вас ознакомиться с документами. Если у вас возникнут вопросы по заполнению документов или организации встречи, я всегда на связи и готова помочь.
            </p>
            <p className="font-medium">Желаем вам увлекательной и познавательной экскурсии!</p>
          </div>
        </div>
      </section>

    </div>
  );
}
