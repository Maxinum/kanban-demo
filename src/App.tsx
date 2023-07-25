import Header from "./components/Header"
import KanbanBoard from "./components/Kanban";
import { Box } from '@chakra-ui/react'
import Filter from "./components/Filter";

const App = () => {

  return (
    <Box>
      <Header />
      <Filter />
        <Box>
          <KanbanBoard />
        </Box>
    </Box>
  )
}

export default App
