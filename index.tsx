import { createRoot } from "react-dom/client";
import {
  Deck,
  DefaultTemplate,
  Slide,
  FlexBox,
  Heading,
  Text,
  Box,
  Grid,
  UnorderedList,
  ListItem,
  OrderedList,
  Image,
} from "spectacle";

const Presentation = () => (
  <Deck template={() => <DefaultTemplate />}>
    <Slide>
      <FlexBox
        height="100%"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box textAlign="center">
          <Text fontSize="24px" color="white">
            Прикарпатський національний університет імені Василя Стефаника
          </Text>
        </Box>
        <Box>
          <Heading fontSize="h2">Виробнича практика</Heading>
        </Box>
        <Grid width="100%" gridTemplateColumns="1fr" gap="0px">
          <Text fontSize="24px" textAlign="right">
            Виконав студент групи КНМ-1
          </Text>
          <Text fontSize="24px" textAlign="right">
            Біланюк Р.Б.
          </Text>
        </Grid>
        <Box textAlign="center">
          <Text fontSize="20px">Івано-Франківськ 2025</Text>
        </Box>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox
        height="100%"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Heading fontSize="h2" margin="0 0 40px 0">
          Інформація про підприємство
        </Heading>
        <Grid width="90%" gridTemplateColumns="1fr" gap="10px">
          <Text textAlign="left">
            <strong>Назва:</strong> RADENCY SP. Z O.O. (ФОП Ігнатьєва Анастасія Миколаївна)
          </Text>
          <Text textAlign="left">
            <strong>Адреса:</strong> St. Jana Dantyszka 18, Warsaw, Mazowieckie, 02-054
          </Text>
          <Text textAlign="left">
            <strong>Контакти:</strong> +380 66 504 44 27, hello@radency.com
          </Text>
          <Text textAlign="left">
            <strong>Cайт:</strong> https://www.radency.com/
          </Text>
          <Text textAlign="left">
            <strong>Галузь:</strong> Комп'ютерне програмування, консалтинг та послуги у сфері цифрових технологій
          </Text>
          <Text textAlign="left">
            <strong>Керівник практики:</strong> Ігнатьєва Анастасія Миколаївна
          </Text>
        </Grid>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading fontSize="h2" margin="0 0 40px 0">
          Про компанію
        </Heading>
        <Text textAlign="center" fontSize="34px">
          Radency — аутсорсна ІТ-компанія, яка зарекомендувала себе на світовому ринку 
          як надійний партнер у розробці програмного забезпечення
        </Text>
        <Box width="80%" margin="20px 0">
          <UnorderedList>
            <ListItem>Розробка інноваційних ІТ-рішень для клієнтів з різних країн</ListItem>
            <ListItem>Штат компанії — до 100 спеціалістів</ListItem>
            <ListItem>Цінності: креативність та інноваційний підхід</ListItem>
          </UnorderedList>
        </Box>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox
        height="100%"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Heading fontSize="h2" margin="0 0 20px 0">
          Завдання практики
        </Heading>
        <Box width="90%" textAlign="center">
          <Text fontSize="34px" margin="0 0 30px 0">
            Розробка інструменту для архівації та завантаження групи файлів
            із відображенням прогресу в реальному часі
          </Text>
          <Box>
            <OrderedList>
              <ListItem>Визначення функціональних та нефункціональних вимог</ListItem>
              <ListItem>Розробка архітектури рішення</ListItem>
              <ListItem>Імплементація серверної частини</ListItem>
              <ListItem>Розробка клієнтської частини</ListItem>
              <ListItem>Тестування та документація</ListItem>
            </OrderedList>
          </Box>
        </Box>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox
        height="100%"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Heading fontSize="h2" margin="0 0 20px 0">
          Технічна реалізація
        </Heading>
        <Box width="90%">
          <Grid gridTemplateColumns="1fr 1fr" gridGap="20px">
            <Box>
              <Heading fontSize="34px" margin="0 0 10px 0">
                Серверна частина
              </Heading>
              <UnorderedList>
                <ListItem fontSize="34px">NestJS</ListItem>
                <ListItem fontSize="34px">BullMQ для черги завдань</ListItem>
                <ListItem fontSize="34px">AWS S3 для зберігання файлів</ListItem>
                <ListItem fontSize="34px">AWS Lambda для обробки</ListItem>
                <ListItem fontSize="34px">WebSocket для подій в реальному часі</ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <Heading fontSize="34px" margin="0 0 10px 0">
                Клієнтська частина
              </Heading>
              <UnorderedList>
                <ListItem fontSize="34px">React SPA</ListItem>
                <ListItem fontSize="34px">Інтерфейс вибору файлів</ListItem>
                <ListItem fontSize="34px">Прогрес-бар з індикацією в реальному часі</ListItem>
                <ListItem fontSize="34px">Автоматичне завантаження готового архіву</ListItem>
              </UnorderedList>
            </Box>
          </Grid>
        </Box>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox
        height="100%"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Heading fontSize="h2" margin="0 0 30px 0">
          Демонстрація системи
        </Heading>
        <Box width="90%">
          <Box marginBottom="30px">
            <Image src="./Screenshot 2025-05-06 at 22.24.31.png" width="100%" />
          </Box>
          <Box>
            <Image src="./Screenshot 2025-05-06 at 22.25.04.png" width="100%" />
          </Box>
        </Box>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading fontSize="h2" margin="0 0 40px 0">
          Вирішені технічні проблеми
        </Heading>
        <Box width="90%">
          <UnorderedList>
            <ListItem>Синхронізація подій прогресу між Lambda та фронтендом</ListItem>
            <ListItem>Обробка помилок при доступі до AWS S3</ListItem>
            <ListItem>Забезпечення коректної роботи черги BullMQ під високим навантаженням</ListItem>
            <ListItem>Організація потокової обробки файлів через readable/writable streams</ListItem>
            <ListItem>Інтеграція механізму повторних спроб при тимчасових помилках</ListItem>
          </UnorderedList>
        </Box>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading fontSize="h2" margin="0 0 40px 0">
          Тестування та документація
        </Heading>
        <Box width="90%">
          <UnorderedList>
            <ListItem>End-to-end тести з використанням WebdriverIO</ListItem>
            <ListItem>Unit-тести з використанням Vitest та Jest</ListItem>
            <ListItem>Підготовка Postman-колекції для API-тестування</ListItem>
            <ListItem>Написання докладної документації в GitHub-репозиторії</ListItem>
          </UnorderedList>
        </Box>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading fontSize="h2" margin="0 0 40px 0">
          Висновки
        </Heading>
        <Box width="90%">
          <Text textAlign="center" fontSize="34px" margin="0 0 30px 0">
            Розроблена система дозволяє користувачу архівувати та завантажувати 
            файли з індикацією прогресу в реальному часі
          </Text>
          <Text textAlign="center" fontSize="34px">
            Набуті навички:
          </Text>
          <UnorderedList>
            <ListItem>Розробка асинхронних розподілених систем</ListItem>
            <ListItem>Інтеграція з AWS-сервісами</ListItem>
            <ListItem>Тестування клієнт-серверних додатків</ListItem>
            <ListItem>Робота з чергами повідомлень та WebSocket</ListItem>
          </UnorderedList>
        </Box>
      </FlexBox>
    </Slide>

    <Slide>
      <FlexBox
        height="100%"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading fontSize="h2" margin="0 0 40px 0">
          Дякую за увагу!
        </Heading>
      </FlexBox>
    </Slide>
  </Deck>
);

createRoot(document.getElementById("app")!).render(<Presentation />);
